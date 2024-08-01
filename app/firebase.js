// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMsAqkwXDr_-QlC3AFLmyqlB-vSvBRUe8",
  authDomain: "pantry-tracker-c70c1.firebaseapp.com",
  projectId: "pantry-tracker-c70c1",
  storageBucket: "pantry-tracker-c70c1.appspot.com",
  messagingSenderId: "96396930653",
  appId: "1:96396930653:web:32d0937e09ab692295a7b4",
  measurementId: "G-HCYP6QSXLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
