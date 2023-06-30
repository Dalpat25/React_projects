// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIjgnyPwOsqOKYEhsAJ_HZm7uIkamU6Zw",
  authDomain: "netflix-clone-8fb97.firebaseapp.com",
  projectId: "netflix-clone-8fb97",
  storageBucket: "netflix-clone-8fb97.appspot.com",
  messagingSenderId: "628769576199",
  appId: "1:628769576199:web:d70e4e7d4fd3bc2df9e1a2",
  measurementId: "G-BL2YMQVYLG"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)