
// src/api/firebaseConfig.js
import { config } from 'dotenv';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // Importa firestore

config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Inicializa Firebase solo si aún no se ha inicializado
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Obtiene la referencia de Firestore
let db = firebase.firestore();

export const SaveEmail = (email) => {
    db.collection("emails").add({
       email
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
};
