// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUy07rO3HGy5eHBpAZ9U1y9glpYrIafCM",
    authDomain: "cars-doctor-bc3bf.firebaseapp.com",
    projectId: "cars-doctor-bc3bf",
    storageBucket: "cars-doctor-bc3bf.appspot.com",
    messagingSenderId: "364177665770",
    appId: "1:364177665770:web:2415bfc8d3c8b7ea34f193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;