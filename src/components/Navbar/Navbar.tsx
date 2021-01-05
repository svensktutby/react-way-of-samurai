import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';

export const Navbar: FC = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/dialogs" activeClassName={s.active}>
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/users" activeClassName={s.active}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
