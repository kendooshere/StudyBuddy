import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBXXlkRJkgrvABphpV75x02sXpHlJ2oko",
    authDomain: "studybuddy-51261.firebaseapp.com",
    projectId: "studybuddy-51261",
    storageBucket: "studybuddy-51261.appspot.com",
    messagingSenderId: "965042095610",
    appId: "1:965042095610:web:635dd4f0e0a48f7de55043"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

auth.onAuthStateChanged((user) => {
    if (user) {
        window.location.href = "home.html"; // Redirect to home after login
    }
});

import "https://www.gstatic.com/firebasejs/ui/6.0.0/firebase-ui-auth.js";

// Initialize FirebaseUI
const ui = new firebaseui.auth.AuthUI(auth);

const uiConfig = {
    signInSuccessUrl: "home.html", // Redirect after successful login
    signInOptions: [
        EmailAuthProvider.PROVIDER_ID,  
        GoogleAuthProvider.PROVIDER_ID
    ]
};

// Start FirebaseUI
ui.start("#firebase-auth-container", uiConfig);