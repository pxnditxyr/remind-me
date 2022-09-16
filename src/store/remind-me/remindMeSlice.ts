import { createSlice } from '@reduxjs/toolkit';
import { IMemory } from '../../interfaces';

export interface remindMeState {
    isSaving: boolean;
    savedMessage: string;
    memories: IMemory[];
    activeMemory: IMemory | null;
}

const initialState : remindMeState = {
    isSaving: false,
    savedMessage: '',
    memories: [],
    activeMemory: null
}

export const remindMeSlice = createSlice({
    name: 'remindMe',
    initialState,
    reducers: {
        addNewEmptyMemory: ( state, action ) => {
            state.memories = [ action.payload, ...state.memories ];
            state.isSaving = false;
        },
        setActiveMemory: ( state, action ) => {
            state.activeMemory = action.payload;
        },
        setMemories: ( state, action ) => {
            state.memories = action.payload;
        },
        updatedMemory: ( state, action ) => {
            state.isSaving = false;
            state.memories = state.memories.map( memory => {
                return ( memory.id === action.payload.id )
                    ? action.payload
                    : memory
            })
            state.savedMessage = `Memory ${ action.payload.title } updated`;

        },
        setImagesToActiveMemory: ( state, action ) => {
            if ( !state.activeMemory ) return;

            if ( !state.activeMemory.imageUrls )
                state.activeMemory.imageUrls = [];

            state.activeMemory.imageUrls = [ ...state.activeMemory.imageUrls, ...action.payload ];

            state.isSaving = false;
        },
        deleteMemoryById: ( state, action ) => {
            state.memories = state.memories.filter( memory => memory.id !== action.payload );
            state.activeMemory = null;
        },
        savingMemory : ( state ) => {
            state.isSaving = true;
            state.savedMessage = '';
        },
        clearMemoriesSignOut: ( state ) => {
            state.isSaving = false;
            state.savedMessage = '';
            state.memories = [];
            state.activeMemory = null;
        }
    }
});

export const {
    addNewEmptyMemory,
    setMemories,
    setActiveMemory,
    updatedMemory,
    setImagesToActiveMemory,
    deleteMemoryById,
    savingMemory,
    clearMemoriesSignOut
} = remindMeSlice.actions;
