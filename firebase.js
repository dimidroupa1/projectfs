import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAUkbItm9MzkPZvTU9WmeIDNOB0ulDsNE4",
    authDomain: "projectforsale-8df67.firebaseapp.com",
    projectId: "projectforsale-8df67",
    storageBucket: "projectforsale-8df67.appspot.com",
    messagingSenderId: "388400376560",
    appId: "1:388400376560:web:b217211773048d6a3e3035"
  };
const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
const db = firebase.firestore();
const auth = firebase.auth();
export { db, app, auth };