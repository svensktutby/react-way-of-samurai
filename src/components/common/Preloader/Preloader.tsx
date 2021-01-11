import React, { FC } from 'react';
import s from './Preloader.module.css';

type PreloaderPropsType = {
  text: string;
};

export const Preloader: FC<PreloaderPropsType> = ({ text }) => {
  return (
    <div className={s.bar}>
      <div className={s.circle}></div>
      <p className={s.text}>{text}</p>
    </div>
  );
};
