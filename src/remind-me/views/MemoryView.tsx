import { useEffect, useMemo } from 'react';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks';
import { useAppDistpach, useAppSelector } from '../../store';
import { setActiveMemory, startDeletingMemory, startSaveMemory, startUploadingFiles } from '../../store/remind-me';
import { Gallery } from '../components';
import { NotFoundPage } from '../pages';

// import 'sweetalert2/dist/sweetalert2.min.css';

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

    
    return (
        <div>
            <div>
                <p> { dateString } </p>
                <input 
                    type="file"
                    multiple
                    onChange={ onFileInputChange }
                    />
                <button onClick={ onSaveMemory } disabled={ isSaving }> Save </button>
            </div>
            <div>
                <textarea 
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                    placeholder="Title"
                    />
                <textarea
                    name="description"
                    value={ description }
                    onChange={ onInputChange }
                    placeholder="Description"
                    />
            </div>
            <div>
                <button onClick={ onDelete }> Delete </button>
            </div>
            <Gallery imageUrls={ memory.imageUrls } title={ title } />

        </div>
    );
};
