import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "angie-s-store-d8fd0.firebaseapp.com",
  projectId: "angie-s-store-d8fd0",
  storageBucket: "angie-s-store-d8fd0.appspot.com",
  messagingSenderId: "1016242321101",
  appId: process.env.VUE_APP_API_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)