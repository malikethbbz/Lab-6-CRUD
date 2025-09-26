// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn1n0zNra7Q1RDeiS1Oik9kGpoSeCX5n8",
  authDomain: "lab6-crud-42092.firebaseapp.com",
  projectId: "lab6-crud-42092",
  storageBucket: "lab6-crud-42092.firebasestorage.app",
  messagingSenderId: "553435629551",
  appId: "1:553435629551:web:2bc7369406f1a35e39981a",
  measurementId: "G-VXZTXDMPWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database as "db"
export const db = getFirestore(app);
