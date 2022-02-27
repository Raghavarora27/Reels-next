// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsTlQDCO7YXyG-ShesS-AOm8yR05Lxw_I",
  authDomain: "reels-next-22509.firebaseapp.com",
  projectId: "reels-next-22509",
  storageBucket: "reels-next-22509.appspot.com",
  messagingSenderId: "1037082597347",
  appId: "1:1037082597347:web:37757884e5af6d4c2c72d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(); // firebase se authentication ki service leke aata hai
const storage = getStorage();
const db = getFirestore();

export { auth, storage, db };
export default app;
