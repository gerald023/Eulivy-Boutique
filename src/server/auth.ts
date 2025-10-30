import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const signUp = async(email: string, password: string, displayName?: string) =>{
    try{
        createUserWithEmailAndPassword(auth, email, password)
    }catch(e){

    }
}
