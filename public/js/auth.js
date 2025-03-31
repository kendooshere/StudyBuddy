// Import Firebase modules properly
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Import FirebaseUI (Don't store it in a variable)
import "https://www.gstatic.com/firebasejs/ui/6.0.0/firebase-ui-auth.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyDBXXlkRJkgrvABphpV75x02sXpHlJ2oko",
    authDomain: "studybuddy-51261.firebaseapp.com",
    projectId: "studybuddy-51261",
    storageBucket: "studybuddy-51261.appspot.com",
    messagingSenderId: "965042095610",
    appId: "1:965042095610:web:635dd4f0e0a48f7de55043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Fix: Use `window.firebase` to Access FirebaseUI
const ui = new window.firebaseui.auth.AuthUI(auth);

// FirebaseUI Config
const uiConfig = {
  signInSuccessUrl: "home.html", // Redirect after login
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID
  ]
};

// Start FirebaseUI
ui.start("#firebase-auth-container", uiConfig);
