import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.css';
import styleBtn from '../common/styles/Button.module.css';
import { AuthType } from '../../types/types';

export type StatePropsType = {
  login: string | null;
  isAuth: boolean;
};

export type DispatchPropsType = {
  setAuthUserData: (data: AuthType) => void;
};

export type PropsType = StatePropsType & DispatchPropsType;

export const Header: FC<PropsType> = ({ login, isAuth }) => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Appveyor_logo.svg"
        alt="Logo"
      />
      <div className={s.loginBlock}>
        {isAuth ? (
          <span className={s.login}>{login}</span>
        ) : (
          <Link className={styleBtn.btn} to="/login">
            Log in
          </Link>
        )}
      </div>
    </header>
  );
};
