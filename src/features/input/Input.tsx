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
  validationFunc?: (value: string) => boolean;
}

const Input = ({
  id,
  name,
  type = 'text',
  className,
  labelText,
  placeholder = '',
  isRenderError = false,
  validationFunc
}: InputProps) => {
  const [value, setValue] = useState(placeholder);
  const [erorrVisible, setErrorVisible] = useState(false);

  return (
    <div className={`form-group ${className}`}>
      <label className={`form-group__label`} htmlFor={id}>
        {labelText}
      </label>
      <input
        className={`form-group__input form-group__input${
          erorrVisible ? '-error' : ''
        }`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (isRenderError && validationFunc)
            validationFunc(e.target.value) ? setErrorVisible(true) : setErrorVisible(false);
        }}
      />
      {isRenderError && erorrVisible ? (
        <p
          className={`form-group__error-message  form-group__error-message${
            erorrVisible ? '-visible' : '-hidden'
          }`}
        >
          ERROR
        </p>
      ) : null}
    </div>
  );
};

export default Input;
