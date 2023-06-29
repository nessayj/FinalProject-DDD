import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBjRZvQ2SjWsOAwYENF0XG976GNWKrtc2g",
    authDomain: "ddd-image.firebaseapp.com",
    projectId: "ddd-image",
    storageBucket: "ddd-image.appspot.com",
    messagingSenderId: "270409007080",
    appId: "1:270409007080:web:85cf8dd859d4e41889ae5d",
    measurementId: "G-WHLYYDR1QR"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();