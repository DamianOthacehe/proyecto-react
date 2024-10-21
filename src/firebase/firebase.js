// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN7YvRyLISDEVNjeccm5E2ab4CwQsRy-E",
  authDomain: "proyecto-ecommerce-react-14b1f.firebaseapp.com",
  projectId: "proyecto-ecommerce-react-14b1f",
  storageBucket: "proyecto-ecommerce-react-14b1f.appspot.com",
  messagingSenderId: "260710095433",
  appId: "1:260710095433:web:f0a0920263ee2b2fa67d98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);