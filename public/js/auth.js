import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import * as firebaseui from "https://www.gstatic.com/firebasejs/ui/6.0.0/firebase-ui-auth.js"; // Import FirebaseUI

const firebaseConfig = {
    apiKey: "AIzaSyDBXXlkRJkgrvABphpV75x02sXpHlJ2oko",
    authDomain: "studybuddy-51261.firebaseapp.com",
    projectId: "studybuddy-5126",
    storageBucket: "studybuddy-51261.appspot.com",
    messagingSenderId: "965042095610",
    appId: "1:965042095610:web:635dd4f0e0a48f7de55043"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// FirebaseUI Config
const uiConfig = {
  signInSuccessUrl: "home.html", // Redirect after login
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};

// Initialize FirebaseUI
const ui = new firebaseui.auth.AuthUI(auth);
ui.start("#firebase-auth-container", uiConfig);
