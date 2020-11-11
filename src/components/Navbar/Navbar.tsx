import React from 'react';
import classes from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const { nav, list, item, link, active } = classes;

  return (
    <nav className={nav}>
      <ul className={list}>
        <li className={`${item} ${active}`}>
          <a className={link} href="/">
            Profile
          </a>
        </li>
        <li className={item}>
          <a className={link} href="/">
            Messages
          </a>
        </li>
        <li className={item}>
          <a className={link} href="/">
            News
          </a>
        </li>
        <li className={item}>
          <a className={link} href="/">
            Music
          </a>
        </li>
        <li className={item}>
          <a className={link} href="/">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};
