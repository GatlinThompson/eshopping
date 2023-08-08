// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJhB1g0pxYue4tMpTlb5S48QzhAsQHqvQ",
  authDomain: "eshoppi-b6671.firebaseapp.com",
  databaseURL: "https://eshoppi-b6671-default-rtdb.firebaseio.com",
  projectId: "eshoppi-b6671",
  storageBucket: "eshoppi-b6671.appspot.com",
  messagingSenderId: "441761122270",
  appId: "1:441761122270:web:95c6be1f2999b58d333f4f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export default app;
