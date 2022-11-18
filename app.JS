// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import {
  getAuth,
  
  signOut 
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXGAKGk456SPmr7mwYML7sAeeMcUHxIXA",
    authDomain: "signin-16fd0.firebaseapp.com",
    projectId: "signin-16fd0",
    storageBucket: "signin-16fd0.appspot.com",
    messagingSenderId: "113352387059",
    appId: "1:113352387059:web:13fb55a9037a0d77354a86",
    measurementId: "G-LELR1MLMVX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

window.logout = function(){
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  console.log(auth)
  alert('Sign-out successful.')
}).catch((error) => {
  // An error happened.
  console.log(error)
});
}