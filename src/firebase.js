import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlEbTY8lr1OfQ6Cpp1YtUUNnkDsMtg4Ec",
  authDomain: "digital-wallet-3b846.firebaseapp.com",
  projectId: "digital-wallet-3b846",
  storageBucket: "digital-wallet-3b846.appspot.com",
  messagingSenderId: "623799443982",
  appId: "1:623799443982:web:89205c63536bea112e125f",
};

// Initialize Firebase and services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
