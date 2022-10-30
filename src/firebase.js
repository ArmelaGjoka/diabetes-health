// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG6ya5bUjdvFoFFd-g9drbbDl9NGvBGYs",
  authDomain: "diabetes-health-e2059.firebaseapp.com",
  projectId: "diabetes-health-e2059",
  storageBucket: "diabetes-health-e2059.appspot.com",
  messagingSenderId: "668834622345",
  appId: "1:668834622345:web:b7c30d301d9f2d6d130f58",
  measurementId: "G-8Z6H67295C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);