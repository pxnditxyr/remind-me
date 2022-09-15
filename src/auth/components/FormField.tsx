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
        <div className="w-full">
            <input 
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
                type={ type }
                name={ name }
                placeholder={ placeholder }
                value={ value }
                onChange={ onChange }
                />
            
            { 
                !!onError && onFormSubmitted && 
                (
                    <div className="px-3">
                        <span 
                            className="text-red-500 text-sm font-semibold"
                        > { onError } </span>
                    </div>
                )
            }
        </div>
    );
};
