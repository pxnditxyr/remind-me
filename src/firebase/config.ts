import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: 'AIzaSyClqYHCWB0m2UU_Db8j0osjHV_f-U6cXSI',
    authDomain: 'remind-me-20e06.firebaseapp.com',
    projectId: 'remind-me-20e06',
    storageBucket: 'remind-me-20e06.appspot.com',
    messagingSenderId: '473642247948',
    appId: '1:473642247948:web:0a7374f1db191654ed4b29'
};

export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
