// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
