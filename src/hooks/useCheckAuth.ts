import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { FirebaseAuth } from '../firebase';
import { useAppDistpach, useAppSelector } from '../store';
import { signIn, signOut } from '../store/auth';


export const useCheckAuth = () => {
    const { status } = useAppSelector( state => state.auth );

    const dispatch = useAppDistpach();

    useEffect( () => {

        onAuthStateChanged( FirebaseAuth, async ( user ) => {
            if ( user ) {
                const { uid, email, displayName, photoURL } = user;
                dispatch( signIn({ uid, displayName, email, photoURL }) );
            } else {
                dispatch( signOut({ errorMessage: null }) );
            }
        });
        
    }, [] );  

    return {
        status
    };
};
