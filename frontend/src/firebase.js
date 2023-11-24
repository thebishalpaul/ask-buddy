// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA783XziZU8vc8D6Ez0CT9X9xNBaYGrwAk",
  authDomain: "askbuddy-mern.firebaseapp.com",
  projectId: "askbuddy-mern",
  storageBucket: "askbuddy-mern.appspot.com",
  messagingSenderId: "997974108922",
  appId: "1:997974108922:web:a5fdd2077b32c325dbb743",
  measurementId: "G-2GEE3F1GH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export{auth,provider};
