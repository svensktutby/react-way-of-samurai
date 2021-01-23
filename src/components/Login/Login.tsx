import React, { FC } from 'react';

import s from './Login.module.css';

export type LoginPagePropsType = Record<string, never>;

export const LoginPage: FC<LoginPagePropsType> = () => {
  return <h1 className={s.login}>LOGIN</h1>;
};
