
const firebaseConfig = {
    apiKey: "AIzaSyDBXXlkRJkgrvABphpV75x02sXpHlJ2oko",
    authDomain: "studybuddy-51261.firebaseapp.com",
    projectId: "studybuddy-51261",
    storageBucket: "studybuddy-51261.appspot.com",
    messagingSenderId: "965042095610",
    appId: "1:965042095610:web:635dd4f0e0a48f7de55043"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const ui = new firebaseui.auth.AuthUI(auth);

const uiConfig = {
  signInSuccessUrl: "home.html", // Redirect after login
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};


ui.start("#firebaseui-auth-container", uiConfig);
