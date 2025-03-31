import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const auth = getAuth();
var firebase = require('firebase');
var firebaseui = require('firebaseui');

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            localStorage.setItem("user", JSON.stringify(userCredential.user));
            alert("Login Successful!");
            window.location.href = "index.html";
        })
        .catch((error) => alert(error.message));
});
