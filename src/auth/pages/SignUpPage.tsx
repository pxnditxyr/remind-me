import { FormEvent, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { FormField } from '../components';
import { AuthLayout } from '../layout';

import { useAppDistpach, useAppSelector } from '../../store';
import { startSignUpUserWithEmailAndPassword } from '../../store/auth';

import { useForm, IFormValidations } from '../../hooks';
import { isName, isDate, isEmail, isUsername, isPassword } from '../../helpers';

const formData = {
    name: 'Enrique',
    birthday: '1998-09-12',
    username: 'pxndxs',
    email: 'example@gmail.com',
    password: 'Madara987!',
    confirmPassword: 'Madara987!'
    // name: '',
    // birthday: '',
    // username: '',
    // email: '',
    // password: '',
    // confirmPassword: ''
};


const formValidations : IFormValidations = {
    name: [ isName, 'Name must be at least 3 characters, only numbers or letters' ],
    username: [ isUsername, 'Username must be at least 3 characters, only numbers or letters' ],
    birthday: [ isDate, 'Birthday must be a valid date' ],
    email: [ isEmail, 'Email must be valid' ],
    password: [ isPassword, 'Password must be at least 8 characters, must contain at least one number, one uppercase and one special character' ],
};

export const SignUpPage = () => {

    const dispatch = useAppDistpach();
    const { status, errorMessage } = useAppSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ] )

    const {
        name, birthday, username, email, password, confirmPassword, onInputChange, onResetForm,
        nameValid, birthdayValid, usernameValid, emailValid, passwordValid, isFormValid,
        formState
    } = useForm( formData, formValidations );

    const [ isFormSubmitted, setIsFormSubmitted ] = useState<boolean>( false );
    const [ samePasswordValid, setSamePasswordValid ] = useState<string | null>( null );

    const onSubmit = ( event : FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        setIsFormSubmitted( true );

        if ( password !== confirmPassword ) {
            setSamePasswordValid( 'Passwords must be the same' );
            return;
        }
        if ( !isFormValid ) return;
        setSamePasswordValid( null );

        dispatch( startSignUpUserWithEmailAndPassword( formState ) );
        onResetForm();
    }

    return (
        <AuthLayout title={ 'Sign Up' }>
            <form
            onSubmit={ onSubmit }>
                <FormField
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={ name }
                    onChange={ onInputChange }
                    onError={ nameValid }
                    onFormSubmitted={ isFormSubmitted }
                    />
                <FormField
                    type="date"
                    name="birthday"
                    value={ birthday }
                    onChange={ onInputChange }
                    onError={ birthdayValid }
                    onFormSubmitted={ isFormSubmitted }
                    />
                <FormField
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={ username }
                    onChange={ onInputChange }
                    onError={ usernameValid }
                    onFormSubmitted={ isFormSubmitted }
                    />
                <FormField
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={ email }
                    onChange={ onInputChange }
                    onError={ emailValid }
                    onFormSubmitted={ isFormSubmitted }
                    />
                <FormField
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={ password }
                    onChange={ onInputChange }
                    onError={ passwordValid }
                    onFormSubmitted={ isFormSubmitted }
                    />
                <FormField
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={ confirmPassword }
                    onChange={ onInputChange }
                    onError={ samePasswordValid }
                    onFormSubmitted={ isFormSubmitted }
                    /> 
                <button disabled={ isCheckingAuthentication }> Sign Up </button>
                { errorMessage && <p> { errorMessage } </p> }
            </form>
            <Link to="../signin"> Already have an account? </Link>
        </AuthLayout>
    );
};
