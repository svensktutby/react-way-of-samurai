import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';
import { randomId } from '../../utils/randomId';
import { PATH } from '../../app/Routes';

export const Navbar: FC = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {Object.entries(PATH)
          .slice(0, 3)
          .map(([title, link]) => {
            return (
              <li key={randomId()} className={s.item}>
                <NavLink
                  className={s.link}
                  to={link}
                  activeClassName={s.active}
                  replace
                >
                  {title.toLowerCase()}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
