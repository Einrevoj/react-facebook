import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBYLL6w3ByS295-Y9ZpmiTlD05JYYyntRI",
    authDomain: "react-facebook-a5cf7.firebaseapp.com",
    projectId: "react-facebook-a5cf7",
    storageBucket: "react-facebook-a5cf7.appspot.com",
    messagingSenderId: "498348568808",
    appId: "1:498348568808:web:ff2435b758ed9191ee595d"
  };

  // Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);

// use these for db, auth & provider
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage }