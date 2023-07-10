import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCtgh1fGBIV1vf7YQ0euJbdt-SvcokO2tk",
  authDomain: "capacitacionesmimbral.firebaseapp.com",
  projectId: "capacitacionesmimbral",
  storageBucket: "capacitacionesmimbral.appspot.com",
  messagingSenderId: "1021775307224",
  appId: "1:1021775307224:web:5606895db998c08a0e12ad",
  measurementId: "G-1X08NB4FT3"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
//const storage=firebase.storage();
export const db = firebaseApp.firestore();
export const  storage=firebase.storage();
/*export {
    storage    
}*/