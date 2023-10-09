// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLQvwvL0pA8lF58REo428szZ0ECAPEKT0",
  authDomain: "netfixgpt-66246.firebaseapp.com",
  projectId: "netfixgpt-66246",
  storageBucket: "netfixgpt-66246.appspot.com",
  messagingSenderId: "432340672379",
  appId: "1:432340672379:web:7caeaa13ef30a889b4e7de",
  measurementId: "G-1LG9XXGDLT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
