import React, { FC } from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import s from './Login.module.css';
import styleBtn from '../common/styles/Button.module.css';
import styleInput from '../common/styles/Input.module.css';

type LoginFormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: FC<InjectedFormProps<LoginFormDataType>> = ({
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styleInput.inputWrapper} ${s.loginWrapper}`}>
        <Field
          className={`${styleInput.input} ${s.login}`}
          component="input"
          type="text"
          name="login"
          placeholder="Login"
        />
      </div>

      <div className={`${styleInput.inputWrapper} ${s.passwordWrapper}`}>
        <Field
          className={`${styleInput.input} ${s.password}`}
          component="input"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={`${styleInput.inputWrapper} ${s.checkboxWrapper}`}>
        <Field
          className={`${styleInput.input} ${s.checkbox}`}
          component="input"
          type="checkbox"
          name="rememberMe"
        />
        <span className={s.hint}>remember me</span>
      </label>

      <div className={`${s.btnWrapper}`}>
        <button type="submit" className={styleBtn.btn}>
          Log in
        </button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormDataType>({
  form: 'login',
})(LoginForm);

export const LoginPage: FC = () => {
  const submitHandler = (formData: LoginFormDataType) => {
    console.table(formData);
  };

  return (
    <div>
      <h1 className={s.title}>LOGIN</h1>

      <div className={s.loginFormWrapper}>
        <LoginReduxForm onSubmit={submitHandler} />
      </div>
    </div>
  );
};
