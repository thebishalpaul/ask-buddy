// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnT4WpAuVWoC8-J5aBQIU4Bxccxzj2wIo",
  authDomain: "ask-buddy-7efa2.firebaseapp.com",
  projectId: "ask-buddy-7efa2",
  storageBucket: "ask-buddy-7efa2.appspot.com",
  messagingSenderId: "991343401562",
  appId: "1:991343401562:web:bf9b841629f738330c1663",
  measurementId: "G-8MFCRCSNQW"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export { auth, provider };
