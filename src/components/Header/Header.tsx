import React from 'react';
import classes from './Header.module.css';

export const Header: React.FC = () => {
  const { header, logo } = classes;

  return (
    <header className={header}>
      <img
        className={logo}
        src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Appveyor_logo.svg"
        alt="Logo"
      />
    </header>
  );
};
