import { useState } from 'react';

import './Input.scss';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  labelText?: string;
  inputText?: string;
  placeholder?: string;
  isRenderError?: boolean;
  validationFunc?: (value: string) => boolean;
}

const Input: React.FC<InputProps> = ({
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
      {labelText ? (
        <label className={`form-group__label`} htmlFor={id}>
          {labelText}
        </label>
      ) : null}
      <input
        className={`form-group__input form-group__input${erorrVisible ? '-error' : ''}`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setErrorVisible(false);
          setValue(e.target.value);
        }}
        onBlur={(e) => {
          if (isRenderError && validationFunc)
            validationFunc(e.target.value) ? setErrorVisible(true) : setErrorVisible(false);
        }}
      >
      </input>
      {isRenderError ? (
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
