// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "fir-app-85413.firebaseapp.com",
    projectId: "fir-app-85413",
    storageBucket: "fir-app-85413.appspot.com",
    messagingSenderId: "738535706687",
    appId: "1:738535706687:web:0589a728f7b72c32a7a88a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 