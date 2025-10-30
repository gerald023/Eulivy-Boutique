import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCsqNGRfXwqe1qfqMP_NRyS4JUqg89387c",
    authDomain: "eulivy-stores.firebaseapp.com",
    projectId: "eulivy-stores",
    storageBucket: "eulivy-stores.firebasestorage.app",
    messagingSenderId: "428168870671",
    appId: "1:428168870671:web:8f6e3495f33c6f01d91c7a",
    measurementId: "G-PTK0FG74NL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);


enableIndexedDbPersistence(db).catch((err) => {
  // fallback: ignore, depends on multi-tab usage
    console.warn("Persistence error:", err);
});

export default app;