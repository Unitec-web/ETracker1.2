// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClJqlLFXFB5zUPiro0H002mnqL5YtKHx4",
  authDomain: "etracker-ec2b3.firebaseapp.com",
  projectId: "etracker-ec2b3",
  storageBucket: "etracker-ec2b3.appspot.com",
  messagingSenderId: "635183002181",
  appId: "1:635183002181:web:6813bb3d8c4d17609f692c",
  measurementId: "G-9T5GKSJRQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth,app}