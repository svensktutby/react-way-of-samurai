import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import s from './Login.module.css';
import styleBtn from '../common/styles/button.module.css';
import { Input } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators';
import { login } from '../../redux/authReducer';
import { AppStateType } from '../../redux/reduxStore';
import { LoginDataType } from '../../api/authApi';

const maxLength30 = maxLengthCreator(30);

type LoginFormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: FC<InjectedFormProps<LoginFormDataType>> = ({
  handleSubmit,
  error,
}) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Field
        component={Input}
        name="email"
        placeholder="Email"
        validate={[required, maxLength30]}
      />

      <Field
        component={Input}
        type="password"
        name="password"
        placeholder="Password"
        validate={[required, maxLength30]}
      />

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={`${s.checkboxWrapper}`}>
        <Field
          className={s.checkbox}
          component="input"
          type="checkbox"
          name="rememberMe"
        />
        <span className={s.hint}>remember me</span>
      </label>

      <div className={`${s.errorWrapper}`}>
        {error && <span className={`${s.error}`}>{error}</span>}
      </div>

      <div className={`${s.btnWrapper}`}>
        <button type="submit" className={styleBtn.btn}>
          Log in
        </button>
      </div>
    </form>
  );
};

const LoginFormRedux = reduxForm<LoginFormDataType>({
  form: 'login',
})(LoginForm);

type StatePropsType = {
  isAuth: boolean;
};

type DispatchPropsType = {
  login: (loginData: LoginDataType) => void;
};

const Login: FC<StatePropsType & DispatchPropsType> = ({
  login: loginCallback,
  isAuth,
}) => {
  const submitHandler = (formData: LoginFormDataType) => {
    loginCallback({ ...formData });
  };

  if (isAuth) return <Redirect to="/profile" />;

  return (
    <div>
      <h1 className={s.title}>LOGIN</h1>

      <div className={s.loginFormWrapper}>
        <LoginFormRedux onSubmit={submitHandler} />
      </div>
    </div>
  );
};

const mapStateToProps = ({
  auth: { isAuth },
}: AppStateType): StatePropsType => {
  return {
    isAuth,
  };
};

export const LoginPage = connect<
  StatePropsType,
  DispatchPropsType,
  Record<string, never>,
  AppStateType
>(mapStateToProps, { login })(Login);
