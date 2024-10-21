// config/firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Z3Dd68Hc3CV0NfN2xQ1HMjgn1j4dCew",
  authDomain: "barderville-efb8a.firebaseapp.com",
  projectId: "barderville-efb8a",
  storageBucket: "barderville-efb8a.appspot.com",
  messagingSenderId: "1022620199806",
  appId: "1:1022620199806:web:77333264856efb61b6612f",
  measurementId: "G-B6WY5GH80E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };