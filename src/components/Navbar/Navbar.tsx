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
          <NavLink className={s.link} to="/news" activeClassName={s.active}>
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/music" activeClassName={s.active}>
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/settings" activeClassName={s.active}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
