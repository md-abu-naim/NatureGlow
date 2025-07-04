// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaI9W2gqPlZbPK0mzQcG2GpcsOix5AHoM",
  authDomain: "natureglow-740e8.firebaseapp.com",
  projectId: "natureglow-740e8",
  storageBucket: "natureglow-740e8.firebasestorage.app",
  messagingSenderId: "166704578722",
  appId: "1:166704578722:web:c753e1725f5f54a12f17fb",
  measurementId: "G-GDLVTFYB47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };