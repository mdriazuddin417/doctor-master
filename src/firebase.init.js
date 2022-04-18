// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV5h6kXRtnXTH5lG-BA0No_qGWYx8mdHE",
  authDomain: "master-doctor.firebaseapp.com",
  projectId: "master-doctor",
  storageBucket: "master-doctor.appspot.com",
  messagingSenderId: "853624507502",
  appId: "1:853624507502:web:e662cf592975fd2a232a7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
