
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiVW97z9I3_A0MRCAToEdjaq7eFfolXK4",
  authDomain: "dgmarq-f41b4.firebaseapp.com",
  projectId: "dgmarq-f41b4",
  storageBucket: "dgmarq-f41b4.firebasestorage.app",
  messagingSenderId: "610945853528",
  appId: "1:610945853528:web:c42219e827aff55484422d",
  measurementId: "G-155VN8KZ14"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
export { auth, provider, providerFacebook, RecaptchaVerifier, signInWithPhoneNumber };