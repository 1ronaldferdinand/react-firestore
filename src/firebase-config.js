// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGWT2znewV1_YPdCni1hvYVWnHrCQNca0",
    authDomain: "fir-crud-tutorial-d3a47.firebaseapp.com",
    projectId: "fir-crud-tutorial-d3a47",
    storageBucket: "fir-crud-tutorial-d3a47.appspot.com",
    messagingSenderId: "869548608586",
    appId: "1:869548608586:web:dffadd875cd571fa2b2ab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);