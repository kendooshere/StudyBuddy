

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

const ui = new window.firebaseui.auth.AuthUI(auth);

const uiConfig = {
  signInSuccessUrl: "home.html",
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID
  ]
};

ui.start("#firebase-auth-container", uiConfig);
