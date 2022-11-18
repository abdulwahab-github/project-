// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
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

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signup = function (e) {
  e.preventDefault();
  var obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function(success){
    console.log(success.user.uid)
   alert('Successfully you Sign up')
  })
  .catch(function(err){
    alert(err)
  });

  console.log(obj);
  firstName.value = ""
 lastName.value = ""
 email.value = ""
 password.value = ""
}; 

// function Sigin(){
//     var email1 = document.getElementById('Email').value;
//     if(email1 == ""){
//         document.getElementById('email').innerHTML = "** Please enter the Email";
//             return false;
//     }
//     var pass = document.getElementById('password').value;
//     if(pass == ""){
//         document.getElementById('pass').innerHTML = "** Please enter the Password";
//             return false;
//     }
//     email1.value = "";
// pass.value = "";
// }
