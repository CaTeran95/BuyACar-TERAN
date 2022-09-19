// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Importing method to link the database of firebase with my app:
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyATnwbWE6if3L4WZBBLA40KbXYNaLN7TXY",
	authDomain: "teran-react.firebaseapp.com",
	projectId: "teran-react",
	storageBucket: "teran-react.appspot.com",
	messagingSenderId: "563628978285",
	appId: "1:563628978285:web:44c4caddbd31bcd7d60f64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Getting information from the database stored on Firebase:
export const db = getFirestore(app);
