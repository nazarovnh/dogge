import { useState } from 'react';

import './Input.scss';

interface InputProps {
  id: string;
  name: string;
  type?: string;
  className: string;
  labelText: string;
  inputText?: string;
  placeholder?: string;
  isRenderError?: boolean;
  validationFunc?: (value: string) => void;
}

const Input = ({
  id,
  name,
  type = 'text',
  className,
  labelText,
  placeholder = '',
  isRenderError = false
}: InputProps) => {
  const [value, setValue] = useState(placeholder);
  const [erorrVisible, setErrorVisible] = useState(false);

  return (
    <div className={`form-group ${className}`}>
      <label className={`form-group__label`} htmlFor={id}>
        {labelText}
      </label>
      <input
        className={`form-group__input`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {isRenderError ? (
        <p className={`login-form__input-password_error${erorrVisible ? '-visible' : ''}`}></p>
      ) : null}
    </div>
  );
};

export default Input;
