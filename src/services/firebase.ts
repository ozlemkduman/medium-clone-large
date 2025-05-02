import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6zw9jR2ow9rMSFU4VE5P3eSNrtLVGuZA",
  authDomain: "large-clone-medium.firebaseapp.com",
  projectId: "large-clone-medium",
  storageBucket: "large-clone-medium.firebasestorage.app",
  messagingSenderId: "1055056108707",
  appId: "1:1055056108707:web:8dc36c835d9fbe8f003316",
  measurementId: "G-NW54T1X0FY"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth()
const providerGoogle = new GoogleAuthProvider();
providerGoogle.addScope('https://www.googleapis.com/auth/contacts.readonly');

export {auth,app,providerGoogle}