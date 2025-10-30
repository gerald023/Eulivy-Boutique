// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getIdTokenResult,
  updateProfile,
  UserCredential
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { UserModel } from "../models/all_models";
import { signUpDTO } from "../dto/authDTO";


type AuthContextType = {
  user: User | null;
  userModel?: UserModel | null;
  loading: boolean;
  signUp: (data:signUpDTO) => Promise<void>;
  signIn: (email: string, password: string) => Promise<UserCredential>; 
  signOutUser: () => Promise<void>;
  isAdmin: boolean;
  refreshTokenClaims: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userModel, setUserModel] = useState<UserModel | null | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (!u) {
        setUserModel(null);
        setIsAdmin(false);
        setLoading(false);
        return;
      }
      // load user doc
      try {
        const userDocRef = doc(db, "users", u.uid);
        const snap = await getDoc(userDocRef);
        if (snap.exists()) {
          setUserModel(snap.data() as UserModel);
        } else {
          // create default user doc
          const newUser: UserModel = {
            uid: u.uid,
            email: u.email ?? "",
            displayName: u.displayName ?? undefined,
            role: "user",
            createdAt: serverTimestamp() as unknown as string,
          };
          await setDoc(userDocRef, newUser);
          setUserModel(newUser);
        }

        // check custom claims
        const idTokenResult = await getIdTokenResult(u, true);
        const claims = idTokenResult.claims;
        setIsAdmin(Boolean(claims.admin) || (snap.exists() && (snap.data() as UserModel).role === "admin"));
      } catch (err) {
        console.error("Auth onChange error", err);
      } finally {
        setLoading(false);
      }
    });
    return () => unsub();
  }, []);

  const signUp = async (data: signUpDTO) => {
    try{
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
    // user doc creation handled in onAuthStateChanged above
    // optionally update profile
    if (data.displayName) {
      await updateProfile(res.user, { displayName: data.displayName,  });
    }
    }catch(e){
      console.log("Firebase sign up Error:", e)
    }
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => signOut(auth);

  const refreshTokenClaims = async () => {
    if (!auth.currentUser) return;
    await auth.currentUser.getIdToken(true);
    const idTokenResult = await getIdTokenResult(auth.currentUser);
    setIsAdmin(Boolean(idTokenResult.claims.admin));
  };

  return (
    <AuthContext.Provider value={{ user, userModel, loading, signUp, signIn, signOutUser, isAdmin, refreshTokenClaims }}>
      {children}
    </AuthContext.Provider>
  );
};
