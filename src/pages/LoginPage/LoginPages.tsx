import Button from '../../features/Button/Button';
import Input from '../../features/Input/Input';
import PasswordInput from '../../features/Input/PasswordInput/PasswordInput';

// import MyLink from '../../features/Link/Link';
import './LoginPage.scss';

const LoginPages = () => {
  const validRegex = /^\S+@\S+\.\S+$/;

  const validateLogin = (login: string): boolean => {
    return !login.match(validRegex) || login === 'login';
  };

  const validatePassword = (password: string): boolean => {
    return password.length < 8 || password === 'password';
  };

  return (
    <form className='login-form'>
      <div className='login-form__container'>
        <div className='login-form__header'>
          <h1 className='login-form__header-title'>DOGGEE</h1>
        </div>
        <div className='login-form__body'>
          <Input
            id={'user_login'}
            name={'user[login]'}
            className='login-form__input login-form__input-login'
            placeholder={'Username'}
            isRenderError
            validationFunc={validateLogin}
          />
          <PasswordInput
            id={'user_password'}
            name={'user[password]'}
            className='login-form__input login-form__input-password'
            placeholder={'Password'}
            validationFunc={validatePassword}
          ></PasswordInput>
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
          <a className='login-form__create-new-accout' href='aboba'>
            Create new accout
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginPages;
