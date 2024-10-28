
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCklNgY9l0b9XheeY-0kChmzDUUZlcrBEk",
  authDomain: "foodwastemanagmentsystem1.firebaseapp.com",
  projectId: "foodwastemanagmentsystem1",
  storageBucket: "foodwastemanagmentsystem1.appspot.com",
  messagingSenderId: "704111742346",
  appId: "1:704111742346:web:bb35ad12241f177e7b4c73",
  measurementId: "G-TXKFXN6173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Get the submit button
const submitButton = document.getElementById('submit');

// Add event listener to the submit button
submitButton.addEventListener("click", function(event) {
  event.preventDefault();  // Prevent the default form submission behavior

  const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

  const email = emailInput.value;
  const password = passwordInput.value;

  // Create a new user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Account created successfully for: " + user.email);
      window.location.href="grand.html"
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});
