
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDBXXlkRJkgrvABphpV75x02sXpHlJ2oko",
  authDomain: "studybuddy-51261.firebaseapp.com",
  projectId: "studybuddy-51261",
  storageBucket: "studybuddy-51261.firebasestorage.app",
  messagingSenderId: "965042095610",
  appId: "1:965042095610:web:635dd4f0e0a48f7de55043"
};
let email = document.getElementById("email");
let password = document.getElementById("password");
let signInButton = document.getElementById("signIn");


firebase.initializeApp(firebaseConfig);

signInButton.addEventListener("click", function() {
  // Sign in the user using Firebase's signInWithEmailAndPassword method
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(function() {
      // Redirect the user to the protected resources page
      window.location.href = "index.html";
    })
    .catch(function(error) {
      // Show an error message
      alert(error.message);
    });
});