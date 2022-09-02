import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { errorCodeToMessages } from '../helpers/errorCodeMessageFirebase';
import { ISignInNecessaryData, ISignUpNecessaryData } from '../interfaces/ISignUpNecessaryData';
import { FirebaseAuth } from './';

const googleProvider = new GoogleAuthProvider();

interface ISignInResult {
    ok: boolean;
    displayName?: string | null;
    errorMessage?: string;
    uid?: string;
    photoURL?: string | null;
}

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        const { displayName, email, photoURL, uid } = result.user;
        return {
            displayName,
            email,
            photoURL,
            uid,
            ok: true
        };
    } catch ( error : any ) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage
        };
    }
};

export const signUpUserWithEmailAndPassword = async ( { name, email, password } : ISignUpNecessaryData ) : Promise<ISignInResult> => {

    try {
        const response = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = response.user;

        if ( FirebaseAuth.currentUser ) {
            await updateProfile( FirebaseAuth.currentUser, {
                displayName: name,
            })
        }

        return {
            ok: true,
            uid,
            photoURL,
        };

    } catch ( error : any ) {
        return {
            ok: false,
            errorMessage: errorCodeToMessages[ error.message ]
        };
    }

};

export const signInUserWithEmailAndPassword = async ( { email, password } : ISignInNecessaryData ) : Promise<ISignInResult> => {
    
    try {
        const response = await signInWithEmailAndPassword( FirebaseAuth, email, password );

        const { displayName, photoURL, uid } = response.user;

        return {
            ok: true,
            displayName,
            photoURL,
            uid
        };

    } catch ( error : any ) {
        return {
            ok: false,
            errorMessage: errorCodeToMessages[ error.message ]
        };
    }
};

export const signOutFirebase = async () => {
    return await FirebaseAuth.signOut();
};
