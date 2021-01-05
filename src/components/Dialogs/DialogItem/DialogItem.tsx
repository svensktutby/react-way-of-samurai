import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';
import { DialogItemType } from '../../../types/types';

export const DialogItem: FC<DialogItemType> = ({ name, id }) => {
  const path = `/dialogs/${id}`;

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {name}
      </NavLink>
    </div>
  );
};
