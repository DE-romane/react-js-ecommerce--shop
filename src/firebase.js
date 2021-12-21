import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDS4ROZtsEy-vwtNOZEDtr5Eci8nmwo704",
  authDomain: "shop-60e6d.firebaseapp.com",
  projectId: "shop-60e6d",
  storageBucket: "shop-60e6d.appspot.com",
  messagingSenderId: "109449778465",
  appId: "1:109449778465:web:361c684d3d7c5a7d171a60",
  measurementId: "G-L5TJJ2Z9XG",
});
const auth = firebase.auth();

export { auth };
