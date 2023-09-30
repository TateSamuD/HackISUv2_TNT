// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr1y5hKS0XcP6aMHlSE8WF0NuF_rpn0N8",
  authDomain: "hackisuv2tnt.firebaseapp.com",
  projectId: "hackisuv2tnt",
  storageBucket: "hackisuv2tnt.appspot.com",
  messagingSenderId: "853060428664",
  appId: "1:853060428664:web:49fbf2e9eeee7f01b95e8d",
  measurementId: "G-871GG3L0CF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
