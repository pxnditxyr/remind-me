import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase';
import { IMemory } from '../../interfaces';

export const loadMemories = async ( uid : string ) => {
    if ( !uid ) throw new Error( 'No uid found' );

    const collectionRef = collection( FirebaseDB, `${ uid }/remind-me/memories` );
    const docs = await getDocs( collectionRef );

    const memories : Array<IMemory> = [];

    docs.forEach( doc => {
        memories.push({
            id: doc.id,
            ...( doc.data() as IMemory )
        })
    });

    return memories;
};
