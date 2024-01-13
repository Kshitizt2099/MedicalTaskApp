// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAegTq8Kdi6iHWoa4k3U5QHUyE_VNLoE9I",
  authDomain: "cart-4a3e5.firebaseapp.com",
  projectId: "cart-4a3e5",
  storageBucket: "cart-4a3e5.appspot.com",
  messagingSenderId: "378601128172",
  appId: "1:378601128172:web:31ef27ec3f29b83fb7a5c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export default db