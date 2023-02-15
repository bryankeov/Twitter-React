// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAYb7nJL7BhTaKLvkRJplYjg4QKFm0NqQ",
  authDomain: "twitter-clone-71eec.firebaseapp.com",
  projectId: "twitter-clone-71eec",
  storageBucket: "twitter-clone-71eec.appspot.com",
  messagingSenderId: "1005582576208",
  appId: "1:1005582576208:web:32b4944e1f30288954bf55",
  measurementId: "G-SWVVK7TPG1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
