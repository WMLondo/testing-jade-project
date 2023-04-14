import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDPPQIxXGX-JbT7BwxATj1x9HTQ1cEvsEM",
  authDomain: "jade-proyect-dev.firebaseapp.com",
  projectId: "jade-proyect-dev",
  storageBucket: "jade-proyect-dev.appspot.com",
  messagingSenderId: "1058940775222",
  appId: "1:1058940775222:web:ca750089f1547d79476197",
});

export const auth = firebase.auth();
export default app;
