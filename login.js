// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABmXuys5mfhiWnso5Dn-nKkW3pIqi9tZM",
  authDomain: "testprojec-5a20f.firebaseapp.com",
  databaseURL:
    "https://testprojec-5a20f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testprojec-5a20f",
  storageBucket: "testprojec-5a20f.appspot.com",
  messagingSenderId: "1053244765239",
  appId: "1:1053244765239:web:6651dd9e0f532d6d873bb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);


//submit

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //imputs

  const email = document.getElementById('email').value;
  const password = document.getElementById("userPassword").value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href="admin.html";
    alert("Signed in successfully");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
});
