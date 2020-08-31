import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyAnq9z-WbmpafL8jJX-jTD6c2pxe2Y9QEc",
   authDomain: "crwn-db-e6983.firebaseapp.com",
   databaseURL: "https://crwn-db-e6983.firebaseio.com",
   projectId: "crwn-db-e6983",
   storageBucket: "crwn-db-e6983.appspot.com",
   messagingSenderId: "56761969659",
   appId: "1:56761969659:web:a5afc7dfe20ce84542f95e",
   measurementId: "G-GF51DV08NM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;