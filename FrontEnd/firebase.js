// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-69cce.firebaseapp.com",
  projectId: "mern-real-estate-69cce",
  storageBucket: "mern-real-estate-69cce.appspot.com",
  messagingSenderId: "91480990509",
  appId: "1:91480990509:web:5aa63de85b6f2e38f069a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);