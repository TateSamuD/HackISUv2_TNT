// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  signInWithEmailAndPassword,
  getAuth,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

import { getDatabase, ref, child, get } from "https://hackisuv2tnt-default-rtdb.firebaseio.com/";

const database = getDatabase();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr1y5hKS0XcP6aMHlSE8WF0NuF_rpn0N8",
  authDomain: "hackisuv2tnt.firebaseapp.com",
  projectId: "hackisuv2tnt",
  storageBucket: "hackisuv2tnt.appspot.com",
  messagingSenderId: "853060428664",
  appId: "1:853060428664:web:74a1fcbd2464353eb95e8d",
  measurementId: "G-VDP80W1NK8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Applicant Login
window.loginApplicant = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const loginError = document.getElementById("loginError");

  const auth = getAuth(app);

  // Sign in with Firebase Authentication
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      const uid = user.id;
      console.log("User signed in:", user);
      //loginSuccess.innerText = "Login successful!";
      window.location.href = "index_applicant.html";
    })
    .catch((error) => {
      // Handle sign-in errors
      const errorMessage = error.message;
      console.error("Sign-in error:", errorMessage);
      loginError.innerText = errorMessage;
    });

  return false; // Prevent form submission
};

// Company Login
window.loginCompany = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const loginError = document.getElementById("loginError");

  const auth = getAuth(app);

  // Sign in with Firebase Authentication
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      const uid = user.id;
      console.log("User signed in:", user);
      //loginSuccess.innerText = "Login successful!";
      window.location.href = "index_company.html";
    })
    .catch((error) => {
      // Handle sign-in errors
      const errorMessage = error.message;
      console.error("Sign-in error:", errorMessage);
      // loginError.innerText = errorMessage;
    });

  return false; // Prevent form submission
};

// Function to handle resume upload
function uploadResume() {
  const fileInput = document.getElementById("resume");
  const uploadStatus = document.getElementById("uploadStatus");

  if (fileInput.files.length === 0) {
    uploadStatus.textContent = "Please select a file to upload.";
    return;
  }

  const file = fileInput.files[0];
  const allowedFileTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!allowedFileTypes.includes(file.type)) {
    uploadStatus.textContent =
      "Invalid file type. Please upload a PDF or Word document.";
    return;
  }

  // Here, you can add code to send the file to your server or perform other actions
  // For example, you can use the Fetch API to send the file to a server-side script

  // For demonstration purposes, we'll just show a success message
  uploadStatus.textContent = "File uploaded successfully.";
}


// Retrieve user data from Firebase
// var userId = "USER_ID"; // Replace with the actual user ID
var userRef = database.ref('user/' + 1);

const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

userRef.on('value', function(snapshot) {
    var userData = snapshot.val();

    // Populate HTML fields with Firebase data
    document.getElementById('username').textContent = userData.username || 'N/A';
    document.getElementById('name').textContent = userData.name || 'N/A';
    document.getElementById('email').textContent = userData.email || 'N/A';
    document.getElementById('phone').textContent = userData.phone || 'N/A';
    document.getElementById('location').textContent = userData.location || 'N/A';
    document.getElementById('school').textContent = userData.school || 'N/A';
    document.getElementById('major').textContent = userData.major || 'N/A';
    document.getElementById('gradYear').textContent = userData.gradYear || 'N/A';
    // Populate other fields in a similar manner
});