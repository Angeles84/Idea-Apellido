import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqUpwjt_z4-XHVX_BWLQk7CMVzY_DA940",
  authDomain: "angie-s-store-d8fd0.firebaseapp.com",
  projectId: "angie-s-store-d8fd0",
  storageBucket: "angie-s-store-d8fd0.appspot.com",
  messagingSenderId: "1016242321101",
  appId: "1:1016242321101:web:d29d0faf2447d43925db84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);