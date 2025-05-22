// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7TwJZJ1y75FwFjbxf4Zbxpd2TywwR_wM",
  authDomain: "explore-email-password-a-88514.firebaseapp.com",
  projectId: "explore-email-password-a-88514",
  storageBucket: "explore-email-password-a-88514.firebasestorage.app",
  messagingSenderId: "610329667109",
  appId: "1:610329667109:web:b683bd7f71b290ae5c01cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);