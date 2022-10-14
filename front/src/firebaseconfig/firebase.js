// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-6_f7Wxlv9Ict12s0N6ISP0XE6siI_8c",
  authDomain: "lavorar-f1dc5.firebaseapp.com",
  projectId: "lavorar-f1dc5",
  storageBucket: "lavorar-f1dc5.appspot.com",
  messagingSenderId: "1081283051417",
  appId: "1:1081283051417:web:f40a5b156785bacea61d08"
};

// Initialize Firebase
export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app)