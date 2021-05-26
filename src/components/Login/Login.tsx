import React from 'react';
import type { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import type { InjectedFormProps } from 'redux-form';

import s from './Login.module.css';
import styleBtn from '../common/styles/button.module.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Input } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators';
import { login } from '../../redux/authReducer';

const maxLength30 = maxLengthCreator(30);

type LoginFormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type LoginFormOwnPropsType = {
  captchaUrl: null | string;
};

const LoginForm: FC<
  InjectedFormProps<LoginFormDataType, LoginFormOwnPropsType> &
    LoginFormOwnPropsType
> = ({ handleSubmit, error, captchaUrl }) => {
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

      {captchaUrl && (
        <div className={`${s.captchaWrapper}`}>
          <img src={captchaUrl} alt="Captcha" />

          <Field
            component={Input}
            name="captcha"
            placeholder="Symbols from image"
            validate={[required]}
          />
        </div>
      )}

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

const LoginReduxForm = reduxForm<LoginFormDataType, LoginFormOwnPropsType>({
  form: 'login',
})(LoginForm);

export const LoginPage: FC = () => {
  const dispatch = useDispatch();

  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const captchaUrl = useTypedSelector((state) => state.auth.captchaUrl);

  const submitHandler = (formData: LoginFormDataType) => {
    dispatch(login({ ...formData }));
  };

  if (isAuth) return <Redirect to="/profile" />;

  return (
    <div>
      <h1 className={s.title}>Login</h1>

      <div className={s.loginFormWrapper}>
        <LoginReduxForm onSubmit={submitHandler} captchaUrl={captchaUrl} />
      </div>
    </div>
  );
};
