// firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAyGilLtIDX9bIs8GppsVTEZo6xxqpwj4U",
  authDomain: "temple-5b810.firebaseapp.com",
  projectId: "temple-5b810",
  storageBucket: "temple-5b810.firebasestorage.app",
  messagingSenderId: "37611694179",
  appId: "1:37611694179:web:0fa7435593b200eac47056",
  measurementId: "G-9ZKEN1DCEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Export services
export { auth, db };
