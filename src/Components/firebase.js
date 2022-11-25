
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs96hSdKvwtE-typ2nkuhn7HWwqSXbD_M",
  authDomain: "proyecto-coder-10c76.firebaseapp.com",
  projectId: "proyecto-coder-10c76",
  storageBucket: "proyecto-coder-10c76.appspot.com",
  messagingSenderId: "1012314606849",
  appId: "1:1012314606849:web:a1c799b8c5a3198e995f00"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 