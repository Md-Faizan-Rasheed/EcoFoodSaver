 
 
 
//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
// //  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";

//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//    apiKey: "AIzaSyCklNgY9l0b9XheeY-0kChmzDUUZlcrBEk",
//    authDomain: "foodwastemanagmentsystem1.firebaseapp.com",
//    projectId: "foodwastemanagmentsystem1",
//    storageBucket: "foodwastemanagmentsystem1.appspot.com",
//    messagingSenderId: "704111742346",
//    appId: "1:704111742346:web:bb35ad12241f177e7b4c73",
//    measurementId: "G-TXKFXN6173"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
// //  const analytics = getAnalytics(app);

// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;

// const submit = document.getElementById('submit');

// submit.addEventListener("click",function(event){

// event.preventDefault();

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     alert("Creating Account.....")
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage)
//     // ..
//   });

// })


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

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

// Get the email and password inputs
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');

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
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Loggin........ " + user.email);
      window.location.href="grand.html"
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});
