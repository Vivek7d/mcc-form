import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCGDjdxxiwLhPVAWauX_-R5lDRY2k3Lg94",
    authDomain: "project-college-3028a.firebaseapp.com",
    projectId: "project-college-3028a",
    storageBucket: "project-college-3028a.appspot.com",
    messagingSenderId: "423567968713",
    appId: "1:423567968713:web:90ff0eaeb0367460334018",
    measurementId: "G-WSD4ZDZNPF"
  };


const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const auth = getAuth(app)
const db = getFirestore(app);

export { db, auth, storage };