// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSU1_tWspKhSXcfPsU0T7-tGGxZIDjgXk",
  authDomain: "udemy-c5edf.firebaseapp.com",
  projectId: "udemy-c5edf",
  storageBucket: "udemy-c5edf.appspot.com",
  messagingSenderId: "852338804498",
  appId: "1:852338804498:web:75a32444e8c6047336d5cb",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
export default auth;
