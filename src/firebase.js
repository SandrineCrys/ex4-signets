import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyCdza3dAqzog4XTUf53Lz_o9xDPFJDvMCw",
  authDomain: "ex3-produits-aef0e.firebaseapp.com",
  projectId: "ex3-produits-aef0e",
  storageBucket: "ex3-produits-aef0e.appspot.com",
  messagingSenderId: "652978357282",
  appId: "1:652978357282:web:17d364f5abe5a61eb6f67b"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
