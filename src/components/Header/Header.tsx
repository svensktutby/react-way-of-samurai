import React, { FC } from 'react';
import s from './Header.module.css';

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Appveyor_logo.svg"
        alt="Logo"
      />
    </header>
  );
};
