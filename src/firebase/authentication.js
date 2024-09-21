import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDI1DAISScPpK2sDoIWNmnQbaGBTQ-HzEo",
  authDomain: "nextgen2024-85e8f.firebaseapp.com",
  projectId: "nextgen2024-85e8f",
  storageBucket: "nextgen2024-85e8f.appspot.com",
  messagingSenderId: "387822594219",
  appId: "1:387822594219:web:29355e043f09d2f6602fee",
  measurementId: "G-DR60NDGE7V"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };