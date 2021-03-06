import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyCimh8BON4EtU8k4VpvsEmtOu_WNL5h0P0",
   authDomain: "crown-db-3c633.firebaseapp.com",
   databaseURL: "https://crown-db-3c633.firebaseio.com",
   projectId: "crown-db-3c633",
   storageBucket: "crown-db-3c633.appspot.com",
   messagingSenderId: "937614945235",
   appId: "1:937614945235:web:72a94d654aee13771c1d26",
   measurementId: "G-CXV0RGR2XS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

   if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         })
      } catch(error) {
         console.log('error creating user', error.message);
      }
   }

   return userRef;
    
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   const collectionRef = firestore.collection(collectionKey);

   const batch = firestore.batch();
   objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
   })

   return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
   const transformedCollection = collections.docs.map( doc => {
      const { title, items } = doc.data();
      return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title, items
      }
   })

   return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
   } , {})
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;