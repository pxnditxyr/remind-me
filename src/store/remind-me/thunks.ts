import { Dispatch } from '@reduxjs/toolkit';
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase';
import { IMemory } from '../../interfaces'
import { fileUpload, loadMemories } from '../../remind-me/helpers';
import { RootState } from '../store';
import { addNewEmptyMemory, deleteMemoryById, savingMemory, setActiveMemory, setImagesToActiveMemory, setMemories, updatedMemory } from './remindMeSlice';

export const startNewMemory = () => {
    return async ( dispatch : Dispatch, getState : () => RootState ) => {

        dispatch( savingMemory() );

        const { uid } = getState().auth;

        const newMemory : IMemory = {
            title: '',
            description: '',
            date: new Date().getTime(),
        };

        const newDoc = doc( collection( FirebaseDB, `${ uid }/remind-me/memories` ) );
        await setDoc( newDoc, newMemory );

        newMemory.id = newDoc.id;

        dispatch( addNewEmptyMemory( newMemory ) );
        dispatch( setActiveMemory( newMemory ) );
    };
};

export const startLoadingMemories = () => {
    return async ( dispatch : Dispatch, getState : () => RootState ) => {
        const { uid } = getState().auth;

        if ( !uid ) throw new Error( 'No uid found' );

        const memories = await loadMemories( uid );

        dispatch( setMemories( memories ) );

    }
}

export const startSaveMemory = () => {
    return async ( dispatch : Dispatch, getState : () => RootState ) => {

        dispatch( savingMemory() );

        const { uid } = getState().auth;
        const { activeMemory } = getState().remindMe;

        const memoryToFirestore = { ...activeMemory };
        delete memoryToFirestore.id;

        if ( !memoryToFirestore.imageUrls )
            delete memoryToFirestore.imageUrls;

        const docRef = doc( FirebaseDB, `${ uid }/remind-me/memories/${ activeMemory?.id }` )
        await setDoc( docRef, memoryToFirestore, { merge: true } );

        dispatch( updatedMemory( activeMemory ) );

    };
};

export const startUploadingFiles = ( files : FileList ) => {
    return async ( dispatch : Dispatch ) => {
        dispatch( savingMemory() );

        const fileUploadPromises : Promise<string>[] = [];

        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) );
        }

        const imagesUrls = await Promise.all( fileUploadPromises );
        dispatch( setImagesToActiveMemory( imagesUrls ) );
    };
};

export const startDeletingMemory = () => {
    return async ( dispatch : Dispatch, getState : () => RootState ) => {
        const { uid } = getState().auth;
        const { activeMemory } = getState().remindMe;

        const docRef = doc( FirebaseDB, `${ uid }/remind-me/memories/${ activeMemory?.id }` );

        await deleteDoc( docRef );

        dispatch( deleteMemoryById( activeMemory?.id ) );

    };
};
