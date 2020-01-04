import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2fpi_UC_Nq9EoR8gLIbd7XcTqdI-g-U0",
    authDomain: "crwn-db-16aad.firebaseapp.com",
    databaseURL: "https://crwn-db-16aad.firebaseio.com",
    projectId: "crwn-db-16aad",
    storageBucket: "crwn-db-16aad.appspot.com",
    messagingSenderId: "312378655799",
    appId: "1:312378655799:web:eeb08ebe95a133f40fabb2",
    measurementId: "G-KTQ9JBX88D"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;