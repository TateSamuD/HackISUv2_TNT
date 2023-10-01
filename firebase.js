// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
require('firebase/auth'); // Import the Firebase Authentication module

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

function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const loginError = document.getElementById("loginError");

  // Sign in with Firebase Authentication
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // User signed in successfully
          const user = userCredential.user;
          console.log("User signed in:", user);
          //loginSuccess.innerText = "Login successful!";
          window.location.href = "index_applicant.html";
      })
      .catch((error) => {
          // Handle sign-in errors
          const errorMessage = error.message;
          console.error("Sign-in error:", errorMessage);
          //loginError.innerText = errorMessage;
      });

  return false; // Prevent form submission
}




