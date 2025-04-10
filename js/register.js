
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
let signUpButton = document.getElementById("signUp");


firebase.initializeApp(firebaseConfig);

signUpButton.addEventListener("click", function() {
    // Sign up the user using Firebase's createUserWithEmailAndPassword method
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then(function() {
        // Redirect the user to the protected resources page
        window.location.href = "/protected-resources.html";
      })
      .catch(function(error) {
        // Show an error message
        alert(error.message);
      });
  });