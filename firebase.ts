// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXq0Rd6gZNoVu5lnNILE-1RmTWV7-5kLE",
  authDomain: "notion-clone-1718.firebaseapp.com",
  projectId: "notion-clone-1718",
  storageBucket: "notion-clone-1718.firebasestorage.app",
  messagingSenderId: "787016903931",
  appId: "1:787016903931:web:0f47011b11e9ab033c145e"
};

// Initialize Firebase
const app = getApps().length ===0? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export {db};

