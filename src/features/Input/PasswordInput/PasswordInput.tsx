import { useState } from 'react';

import { Icon } from '../../../shared/Icon';
import { IconType } from '../../../shared/Icon/IconMap';

import './PasswordInput.scss';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  labelText?: string;
  inputText?: string;
  placeholder?: string;
  validationFunc: (value: string) => boolean;
}

const PasswordInput: React.FC<InputProps> = ({
  id,
  name,
  className,
  labelText,
  placeholder = '',
  validationFunc
}: InputProps) => {
  const [value, setValue] = useState(placeholder);
  const [erorrVisible, setErrorVisible] = useState(false);
  const [showValue, setShowValue] = useState(false);

  return (
    <div className={`form-group ${className}`}>
      {labelText ? (
        <label className={`form-group__label`} htmlFor={id}>
          {labelText}
        </label>
      ) : null}
      <div className={`form-group__password-container`}>
        <input
          className={`form-group__input form-group__input-password form-group__input-password${
            erorrVisible ? '-error' : ''
          }`}
          type={showValue ? 'text' : 'password'}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setErrorVisible(false);
            setValue(e.target.value);
          }}
          onBlur={(e) => {
            validationFunc(e.target.value) ? setErrorVisible(true) : setErrorVisible(false);
          }}
        ></input>
        <button type='button' className='form-group__button-password' onClick={() => setShowValue(!showValue)}>
          <Icon className='login-form__password-icon' iconType={IconType.Eye}></Icon>
        </button>
      </div>
      <p
        className={`form-group__error-message  form-group__error-message${
          erorrVisible ? '-visible' : '-hidden'
        }`}
      >
        ERROR
      </p>
    </div>
  );
};

export default PasswordInput;
