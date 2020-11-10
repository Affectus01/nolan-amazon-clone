import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvJ8K7dPVX7gmX_jDSgHAvyuKtABen1pw",
  authDomain: "nolan-amzn-clone-e5e1a.firebaseapp.com",
  databaseURL: "https://nolan-amzn-clone-e5e1a.firebaseio.com",
  projectId: "nolan-amzn-clone-e5e1a",
  storageBucket: "nolan-amzn-clone-e5e1a.appspot.com",
  messagingSenderId: "828258240340",
  appId: "1:828258240340:web:bdd5ec667a3d6cd1e32ac1",
  measurementId: "G-G1LY5D744J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.analytics();

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
