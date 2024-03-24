// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQXimjTCjzoSF7UGALbSKMre7nQvZMCIc",
    authDomain: "magictree-1058b.firebaseapp.com",
    projectId: "magictree-1058b",
    storageBucket: "magictree-1058b.appspot.com",
    messagingSenderId: "351346314295",
    appId: "1:351346314295:web:477952af1d9650692c43b2",
    measurementId: "G-7EQHR7HT4T"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
// Export authentication is to be able to import in different files

export const signUpWithEmail = async (email, password) =>{
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("name", "Blank");
      localStorage.setItem("email", email);
      console.log('User registered in successfully:', userCredential.user);
      return userCredential
    } catch (error) {
      console.log(error);
    }
}

export const loginWithEmail = async (email, password) =>{
    try {
      const userLoginCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("name", "Blank");
      localStorage.setItem("email", email);
      console.log('User logged in successfully:', userLoginCredential.user);
      return userLoginCredential
    } catch (error) {
      console.log(error);
    }
}



