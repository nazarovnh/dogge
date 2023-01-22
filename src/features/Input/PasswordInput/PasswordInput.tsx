import React from 'react';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    labelText?: string;
    inputText?: string;
    placeholder?: string;
    validationFunc: (value: string) => boolean;
  }

const PasswordInput = () => {
    return (
        <div>
            
        </div>
    );
}

export default PasswordInput;