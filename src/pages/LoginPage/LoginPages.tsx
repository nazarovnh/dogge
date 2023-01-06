import Button from '../../features/Button/Button';
import Input from '../../features/input/Input';

import './LoginPage.scss';

const LoginPages = () => {
  return (
    <form className='login-form'>
      <div className='login-form__container'>
        <div className='login-form__header'>
          <h1>DOGGE</h1>
        </div>
        <div className='login-form__body'>
          <Input
            id={'user_login'}
            name={'user[login]'}
            className='login-form__input login-form__input-login'
            labelText={'Login'}
            placeholder={'login'}
            isRenderError
          />
          <Input
            id={'user_password'}
            name={'user[password]'}
            className='login-form__input login-form__input-password'
            labelText={'Password'}
            placeholder={'password'}
            isRenderError
          ></Input>
          <Input
            id={'checkbox_device'}
            name={'user[checkbox_device]'}
            className='login-form__input login-form__input-device'
            labelText={'This is my root device'}
            type={'checkbox'}
          ></Input>

          <Button className='login-form__sign-in-button' onClick={() => console.log('Check')}>
            Sign in
          </Button>
          <a className={'login-form__new-account'} href='https://aboba.html'>
            Link
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginPages;
