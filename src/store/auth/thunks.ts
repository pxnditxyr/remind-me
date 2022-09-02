import { Dispatch } from '@reduxjs/toolkit';
import { signInUserWithEmailAndPassword, signInWithGoogle, signOutFirebase, signUpUserWithEmailAndPassword } from '../../firebase';
import { ISignInNecessaryData, ISignUpNecessaryData } from '../../interfaces/ISignUpNecessaryData';
import { checkingCredentials, signIn, signOut } from './';

export const checkingAuthentication = ( email : string, password : string ) => {
    return async ( dispatch : Dispatch ) => {
        dispatch( checkingCredentials() );
    };
};

export const startGoogleSignIn = ( email : string, password : string ) => {
    return async ( dispatch : Dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch( signOut( result.errorMessage ) );
        dispatch( signIn( result ) );
    };
};

export const startSignUpUserWithEmailAndPassword = ( signUpNecessaryData : ISignUpNecessaryData ) => {
    return async ( dispatch : Dispatch ) => {

        const { name, email } = signUpNecessaryData;
    
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await signUpUserWithEmailAndPassword( signUpNecessaryData );

        if ( !ok ) return dispatch( signOut({ errorMessage }) );

        dispatch( signIn({ uid, displayName: name, email, photoURL }) )
    }
}

export const startSignInUserWithEmailAndPassword = ( signInNecessaryData : ISignInNecessaryData ) => {
    return async ( dispatch : Dispatch ) => {

        const { email, password } = signInNecessaryData;

        dispatch( checkingCredentials() );

        const { ok, uid, displayName, photoURL, errorMessage } = await signInUserWithEmailAndPassword( signInNecessaryData );

        if ( !ok ) return dispatch( signOut({ errorMessage }) );

        dispatch( signIn({ uid, displayName, email, photoURL }) );
    };
};

export const startSignOut = ()  => {
    return async ( dispatch : Dispatch ) => {
        await signOutFirebase();
        dispatch( signOut({ errorMessage: null }) );
    };
};
