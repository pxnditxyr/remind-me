import { useEffect, useMemo, useRef } from 'react';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks';
import { useAppDistpach, useAppSelector } from '../../store';
import { setActiveMemory, startDeletingMemory, startSaveMemory, startUploadingFiles } from '../../store/remind-me';
import { Gallery } from '../components';
import { NotFoundPage } from '../pages';

interface IFormData {
    [ key: string ]: string;
}

export const MemoryView = () => {

    const dispatch = useAppDistpach();
    const { activeMemory: memory, savedMessage, isSaving } = useAppSelector( state => state.remindMe );

    if ( !memory ) return ( <NotFoundPage /> );
    const { date: memoryDate } = memory;

    const { title, description, onInputChange, formState } = useForm( ( memory as unknown ) as IFormData );
    
    const dateString = useMemo( () => {
        const date = new Date( memoryDate );
        return date.toUTCString();
    }, [ memoryDate ])

    useEffect( () => {
        dispatch( setActiveMemory( formState ) );
    }, [ formState ] );

    useEffect( () => {
        if ( savedMessage.length > 0 )
            Swal.fire( 'Updated Memory', savedMessage, 'success' );
    }, [ savedMessage ] );

    const onSaveMemory = () => {
        dispatch( startSaveMemory() );
    };

    const onFileInputChange = ( { target } : React.ChangeEvent<HTMLInputElement> ) => {
        if ( !target.files || target.files?.length === 0 ) return;
        dispatch( startUploadingFiles( target.files ) );
    };

    const onDelete = () => {
        dispatch( startDeletingMemory() );
    };

    const fileInputRef = useRef<HTMLInputElement>( null );
    
    return (
        <div
            className="flex flex-col items-center h-full relative z-0 gap-y-4"
        >
            <div
                className="flex flex-col items-center justify-between w-full p-4 sm:flex-row gap-4"
            >
                <p
                    className="text-lg font-bold"
                > { dateString } </p>
                <input 
                    type="file"
                    multiple
                    onChange={ onFileInputChange }
                    className="hidden"
                    ref={ fileInputRef }
                    />

                <div
                    className="px-5 py-2 rounded-lg cursor-pointer flex items-center gap-x-2 bg-slate-200 hover:bg-slate-300"
                    id="input-file"
                    onClick={ () => fileInputRef.current?.click() }
                >
                    <span
                        className="text-xl text-gray-700"
                    >
                        Upload images
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={ 2 }
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                </div>
                <button
                    onClick={ onSaveMemory }
                    disabled={ isSaving }
                    className="px-5 py-2 rounded-lg cursor-pointer flex items-center gap-x-2 bg-pink-700 text-white hover:bg-pink-500 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-bold"
                > Save </button>
            </div>
            <div
                className="flex flex-col items-center justify-start w-full p-4 gap-y-4"
            >
                <textarea 
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                    placeholder="Title"
                    className="w-full h-20 p-2 text-2xl font-bold text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                    />
                <textarea
                    name="description"
                    value={ description }
                    onChange={ onInputChange }
                    placeholder="Description"
                    className="w-full h-80 p-2 text-lg font-medium text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                    />
            </div>
            <div
                className="flex flex-col items-center justify-start p-4 gap-y-4 absolute left-0 bottom-0 sm:bottom-20 z-10"
            >
                <button
                    onClick={ onDelete }
                    className="px-5 py-2 rounded-lg cursor-pointer flex items-center gap-x-2 bg-red-700 text-white hover:bg-red-500 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                > Delete </button>
            </div>
            <span 
                className="text-2xl font-bold text-gray-800 w-full px-4"
            >
                Images
            </span>
            <Gallery imageUrls={ memory.imageUrls } title={ title } />

        </div>
    );
};
