// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI1DAISScPpK2sDoIWNmnQbaGBTQ-HzEo",
  authDomain: "nextgen2024-85e8f.firebaseapp.com",
  projectId: "nextgen2024-85e8f",
  storageBucket: "nextgen2024-85e8f.appspot.com",
  messagingSenderId: "387822594219",
  appId: "1:387822594219:web:29355e043f09d2f6602fee",
  measurementId: "G-DR60NDGE7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


console.log('Firebase App Initialized:', app);
