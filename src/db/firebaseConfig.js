// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUeCtKzCPRh61PfYgVg9YMEoZOnZIY-dk",
  authDomain: "marlyn-cuanto.firebaseapp.com",
  projectId: "marlyn-cuanto",
  storageBucket: "marlyn-cuanto.appspot.com",
  messagingSenderId: "248399909851",
  appId: "1:248399909851:web:2449cbb92e07c9e3548dfe"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
