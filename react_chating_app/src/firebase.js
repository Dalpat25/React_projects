import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC60qAKrmlxOdLJce3CedTbjIFWe0Q7RI",
  authDomain: "chat-app-e3bae.firebaseapp.com",
  projectId: "chat-app-e3bae",
  storageBucket: "chat-app-e3bae.appspot.com",
  messagingSenderId: "792844741446",
  appId: "1:792844741446:web:38322d0f5ba62cbeb61347",
  measurementId: "G-JTNVWX76XR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";


// const firebaseConfig = {
//     apiKey: "AIzaSyAu9DHIQNl7ZaHa_V5-nXDqkFc_LMZdz6E",
//   authDomain: "react-chat-app-633a3.firebaseapp.com",
//   projectId: "react-chat-app-633a3",
//   storageBucket: "react-chat-app-633a3.appspot.com",
//   messagingSenderId: "820226278519",
//   appId: "1:820226278519:web:50252605866758518eb272",
//   measurementId: "G-NKRFZR011V"
// };



// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth()
// export const storage = getStorage();
// export const db = getFirestore()