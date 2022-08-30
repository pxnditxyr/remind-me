import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'notAuthenticated', // checking, authenticated, notAuthenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        signIn: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
        },
        signOut: ( state, { payload } ) => {
            state.status = 'notAuthenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage;
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        },
    }
});

export const { signIn, signOut, checkingCredentials } = authSlice.actions;
