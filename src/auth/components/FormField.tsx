import { ChangeEvent } from 'react';


interface IFormFieldProps {
    name: string;
    type: string;
    placeholder?: string;
    value: string;
    onChange: ( event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;
    onError?: string | null;
    onFormSubmitted?: boolean;
}

export const FormField = ( { type, name, placeholder, value, onChange, onError, onFormSubmitted = true } : IFormFieldProps ) => {
    return (
        <div>
            <input 
                type={ type }
                name={ name }
                placeholder={ placeholder }
                value={ value }
                onChange={ onChange }
                />
            
            { !!onError && onFormSubmitted && <div> { onError  }</div> }
        </div>
    );
};
