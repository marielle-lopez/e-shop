// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrZE1VggEiQeLz3OtQuXOuGmCWwFryYNA",
  authDomain: "e-shop-9fc7b.firebaseapp.com",
  projectId: "e-shop-9fc7b",
  storageBucket: "e-shop-9fc7b.appspot.com",
  messagingSenderId: "899117505537",
  appId: "1:899117505537:web:fb493aaa41c375e229b400",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialise Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// BACKUP DATABASE ///////////////////////////////////////////////////
// const firebaseConfig = {
//   apiKey: "AIzaSyBfhTQSPkA1XaSqFNB4ND5-TksuUfoqD9o",
//   authDomain: "e-shop-backup.firebaseapp.com",
//   projectId: "e-shop-backup",
//   storageBucket: "e-shop-backup.appspot.com",
//   messagingSenderId: "817392226644",
//   appId: "1:817392226644:web:d5dbd26eff7efbc2b578c1",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialise Cloud Firestore and get a reference to the service
// export const db = getFirestore(app);
