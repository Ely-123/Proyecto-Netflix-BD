import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBg883049xYhNuKViJfvf3_Omcp5O7n-R0",
  authDomain: "netflix-clone-9ee85.firebaseapp.com",
  projectId: "netflix-clone-9ee85",
  storageBucket: "netflix-clone-9ee85.appspot.com",
  messagingSenderId: "419584112307",
  appId: "1:419584112307:web:5552f8dfc31b7eb5c5a2c6",
  measurementId: "G-90E6HYCEHN"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
