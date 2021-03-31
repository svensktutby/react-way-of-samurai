import React, { FC } from 'react';
import s from './Error404.module.css';

export const Error404: FC = () => {
  return (
    <div className={s.page}>
      <div className={s.main}>
        <h1 className={s.title}>404 - Not&nbsp;found</h1>
        <p className={s.text}>
          —<span>Uh oh.</span> <span>¯\_(ツ)_/¯</span>—
        </p>
      </div>
    </div>
  );
};
