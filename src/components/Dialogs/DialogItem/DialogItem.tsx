import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';
import { DialogItemPropsType } from '../../../index';

export const DialogItem: FC<DialogItemPropsType> = ({ name, id }) => {
  const path = `/dialogs/${id}`;

  return (
    <li className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {name}
      </NavLink>
    </li>
  );
};
