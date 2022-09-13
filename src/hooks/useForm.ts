import { ChangeEvent, useEffect, useMemo, useState } from 'react';

export interface IFormValidations {
    [ key: string ]: [ ( value : string ) => boolean, string ];
};
interface IFormState {
    [ key: string ]: string;
};

interface IFormCheckValues {
    [ key: string ]: string | null;
};

export const useForm = <T extends IFormState>( initialState : T, formValidations : IFormValidations = {} ) => {

    const [ formState, setFormState ] = useState<T>( initialState );
    const [ formValidation, setFormValidation ] = useState<IFormCheckValues>( {} as IFormCheckValues );

    useEffect( () => {
        createValidators();
    }, [ formState ] )

    useEffect( () => {
        setFormState( initialState );
    }, [ initialState ] )


    const isFormValid = useMemo( () => {

        for ( const formValue of Object.keys( formValidation ) ) {
            if ( formValidation[ formValue ] !== null ) return false;
        }
        return true;

    }, [ formValidation ]);

    const onInputChange = ( { target } : ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    };

    const onResetForm = () => setFormState( initialState );

    const createValidators = () => {

        const formCheckValues : IFormCheckValues = {} as IFormCheckValues;
        for ( const formField of Object.keys( formValidations ) ) {
            const [ fn, errorMessage ] = formValidations[ formField ];
            formCheckValues[ `${ formField }Valid` ] = fn( formState[ formField ] ) ? null : errorMessage;
        }
        setFormValidation( formCheckValues );
    };

    return {
        onInputChange,
        onResetForm,
        formState,
        isFormValid,
        ...formState,
        ...formValidation,
    };
};
