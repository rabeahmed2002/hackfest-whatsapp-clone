// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCjdspHe4neucxL29JT0uLH_UzrAIOYJZU",
    authDomain: "hackfest-whatsapp.firebaseapp.com",
    projectId: "hackfest-whatsapp",
    storageBucket: "hackfest-whatsapp.appspot.com",
    messagingSenderId: "294027651643",
    appId: "1:294027651643:web:fcd0d8a8245ee103cf8a1e",
    measurementId: "G-FK0N1P7VJ1"
  };

const app=firebase.initializeApp(firebaseConfig)

const auth=firebase.auth()

const db = app.firestore()

const googleProvider=new firebase.auth.GoogleAuthProvider

export {auth, googleProvider};

export default db;