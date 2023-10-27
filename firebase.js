// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQab229rASvKLyJpsjzp11BNKag2OfzM0",
  authDomain: "react-note-c51e4.firebaseapp.com",
  projectId: "react-note-c51e4",
  storageBucket: "react-note-c51e4.appspot.com",
  messagingSenderId: "76501060790",
  appId: "1:76501060790:web:f18910f754c1d72c6fea17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
