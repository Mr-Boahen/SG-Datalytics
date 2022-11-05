// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAri-5OdmL6r-UqFOVLtl_1KcHxiRHN3s4",
  authDomain: "sg-datalytics.firebaseapp.com",
  projectId: "sg-datalytics",
  storageBucket: "sg-datalytics.appspot.com",
  messagingSenderId: "617611133181",
  appId: "1:617611133181:web:5c153e021b5568f07e7e94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()