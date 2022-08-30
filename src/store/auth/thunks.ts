import { Dispatch } from '@reduxjs/toolkit';
import { signInWithGoogle } from '../../firebase';
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
