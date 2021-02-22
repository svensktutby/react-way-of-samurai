import React, { FC } from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import s from './Login.module.css';
import styleBtn from '../common/styles/Button.module.css';
import { Input } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators';

const maxLength15 = maxLengthCreator(15);

type LoginFormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: FC<InjectedFormProps<LoginFormDataType>> = ({
  handleSubmit,
}) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Field
        component={Input}
        name="login"
        placeholder="Login"
        validate={[required, maxLength15]}
      />

      <Field
        component={Input}
        type="password"
        name="password"
        placeholder="Password"
        validate={[required, maxLength15]}
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
