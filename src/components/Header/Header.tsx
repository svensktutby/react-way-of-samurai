import React, { FC } from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import styleBtn from '../common/styles/Button.module.css';
import { PropsType } from './HeaderContainer';

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
          <NavLink className={styleBtn.btn} to="/login">
            Log in
          </NavLink>
        )}
      </div>
    </header>
  );
};
