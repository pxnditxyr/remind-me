import { FormEvent, useMemo, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout';

import { isEmail } from '../../helpers';

import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';
import { useForm, IFormValidations } from '../../hooks';
import { useAppDistpach, useAppSelector } from '../../store';
import { FormField } from '../components';



const formData = {
    email: 'yuki@gmail.com',
    password: '123456'
}

const formValidations : IFormValidations = {
    email: [ isEmail, 'Email must be valid' ],
}

export const SignInPage = () => {

    const dispatch = useAppDistpach();
    const { status } = useAppSelector( state => state.auth );

    const isAuthenticated = useMemo( () => status === 'checking', [ status ] );

    const [ isFormSubmitted, setIsFormSubmitted ] = useState<boolean>( false );

    const { 
        email, password, emailValid,
        onInputChange, onResetForm 
    } = useForm( formData, formValidations );

    const onSubmit = ( event : FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        dispatch( checkingAuthentication( email, password ) );
        setIsFormSubmitted( true );
        onResetForm();
    };

    const onGoogleSignIn = () => {
        console.log( 'On Google Sign In' );
        dispatch( startGoogleSignIn( email, password ) );
    };

    return (
        <AuthLayout title={ 'Sign In' }>
            <form onSubmit={ onSubmit }>
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={ password }
                    onChange={ onInputChange }
                    />
                <button
                    disabled={ isAuthenticated }
                > Sign In </button>
            </form>
            <Link to="../signup">  Don't have an account? Sign Up </Link>
            <button 
                onClick={ onGoogleSignIn }
                disabled={ isAuthenticated }
            > Sign In with Google </button>
        </AuthLayout>
    );
};
