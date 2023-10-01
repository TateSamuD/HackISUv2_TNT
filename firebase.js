// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage";
require('firebase/auth'); // Import the Firebase Authentication module

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr1y5hKS0XcP6aMHlSE8WF0NuF_rpn0N8",
  authDomain: "hackisuv2tnt.firebaseapp.com",
  projectId: "hackisuv2tnt",
  storageBucket: "hackisuv2tnt.appspot.com",
  messagingSenderId: "853060428664",
  appId: "1:853060428664:web:74a1fcbd2464353eb95e8d",
  measurementId: "G-VDP80W1NK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

// Login user.
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

// Function to handle resume upload
function uploadResume() {
  const fileInput = document.getElementById('resume');
  const uploadStatus = document.getElementById('uploadStatus');

  if (fileInput.files.length === 0) {
      uploadStatus.textContent = 'Please select a file to upload.';
      return;
  }

  const file = fileInput.files[0];
  const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

  if (!allowedFileTypes.includes(file.type)) {
      uploadStatus.textContent = 'Invalid file type. Please upload a PDF or Word document.';
      return;
  }

  // Here, you can add code to send the file to your server or perform other actions
  // For example, you can use the Fetch API to send the file to a server-side script

  // For demonstration purposes, we'll just show a success message
  uploadStatus.textContent = 'File uploaded successfully.';
}

function fetchUserData() {
  $.ajax({
      url: 'fetch_user_data.php', // Replace with the actual server-side script
      type: 'GET',
      dataType: 'json',
      success: function(data) {
          // Update the page with fetched user data
          document.getElementById('username').textContent = data.username;
          document.getElementById('name').textContent = data.name;
          document.getElementById('email').textContent = data.email;
          document.getElementById('age').textContent = data.age;
          document.getElementById('location').textContent = data.location;
      },
      error: function() {
          console.log('Error fetching user data.');
      }
  });
}

// Call the function to fetch user data when the page loads
window.onload = fetchUserData;




