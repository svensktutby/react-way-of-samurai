import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.css';
import styleBtn from '../common/styles/Button.module.css';
import logo from '../../assets/images/logo.svg';

export type HeaderPropsType = {
  login: string | null;
  logout: () => void;
  isAuth: boolean;
};

export const Header: FC<HeaderPropsType> = ({ login, logout, isAuth }) => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} width="40" height="40" alt="Logo" />
      <div className={s.loginBlock}>
        {isAuth ? (
          <div>
            <span className={s.login}>{login}</span>
            <button type="button" className={styleBtn.btn} onClick={logout}>
              Log out
            </button>
          </div>
        ) : (
          <Link className={styleBtn.btn} to="/login">
            Log in
          </Link>
        )}
      </div>
    </header>
  );
};
