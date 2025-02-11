// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAegzRfvYTPg3bbi8o24atld30Q7-13cKs",
  authDomain: "react-firebase-9eaf9.firebaseapp.com",
  projectId: "react-firebase-9eaf9",
  storageBucket: "react-firebase-9eaf9.firebasestorage.app",
  messagingSenderId: "539653566090",
  appId: "1:539653566090:web:55d3f0dea7e42323898773",
  measurementId: "G-RFG8GPH4WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
