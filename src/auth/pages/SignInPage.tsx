import { FormEvent, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout';

import { isEmail } from '../../helpers';

import { startGoogleSignIn, startSignInUserWithEmailAndPassword } from '../../store/auth';
import { useForm, IFormValidations } from '../../hooks';
import { useAppDistpach, useAppSelector } from '../../store';
import { FormField } from '../components';



const formData = {
    email: '',
    password: '',
}

const formValidations : IFormValidations = {
    email: [ isEmail, 'Email must be valid' ],
}

export const SignInPage = () => {

    const dispatch = useAppDistpach();
    const { status, errorMessage } = useAppSelector( state => state.auth );

    const isAuthenticated = useMemo( () => status === 'checking', [ status ] );

    const [ isFormSubmitted, setIsFormSubmitted ] = useState<boolean>( false );

    const { 
        email, password, emailValid,
        onInputChange, onResetForm,
        formState
    } = useForm( formData, formValidations );

    const onSubmit = ( event : FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        setIsFormSubmitted( true );
        if ( email.length < 3 ) return;
        dispatch( startSignInUserWithEmailAndPassword( formState ) );
        onResetForm();
    };

    const onGoogleSignIn = () => {
        dispatch( startGoogleSignIn() );
    };

    return (
        <AuthLayout title={ 'Sign In' }>
            <form
                className="flex flex-col items-center gap-3 w-full"
                onSubmit={ onSubmit }>
                <FormField
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={ email }
                    onChange={ onInputChange }
                    onError={ emailValid }
                    onFormSubmitted={ isFormSubmitted }
                    />
                <input
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={ password }
                    onChange={ onInputChange }
                    />

                <button 
                    disabled={ isAuthenticated }
                    className="w-full p-3 rounded-md bg-emerald-600 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50"
                > Sign In </button>
                { errorMessage && ( <p className="text-red-500 text-sm font-semibold"> { errorMessage } </p> ) }
            </form>
            <button 
                onClick={ onGoogleSignIn }
                disabled={ isAuthenticated }
                className="w-full mx-3 p-3 rounded-md bg-red-600 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
            > Sign In with Google </button>
            <Link
                to="../signup"
                className="text-sky-700 hover:underline px-3"
            >  Don't have an account? Sign Up </Link>

        </AuthLayout>
    );
};
