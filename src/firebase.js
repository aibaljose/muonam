// Replace the values below with your Firebase project config from the Firebase Console
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7v6_E9jfR4Y-xEOwejF_5Alcvo5rnJ30",
  authDomain: "muonam-8c8d5.firebaseapp.com",
  projectId: "muonam-8c8d5",
  storageBucket: "muonam-8c8d5.firebasestorage.app",
  messagingSenderId: "585088112899",
  appId: "1:585088112899:web:d51f073b6edd8bcfb2f136"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
