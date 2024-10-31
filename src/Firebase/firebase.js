// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_B1PkyehlWtT9_2dalgidNVjNRSW82vM",
    authDomain: "ecommerce-firbase.firebaseapp.com",
    projectId: "ecommerce-firbase",
    storageBucket: "ecommerce-firbase.appspot.com",
    messagingSenderId: "485397336843",
    appId: "1:485397336843:web:41e01077095ac87d48080e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);