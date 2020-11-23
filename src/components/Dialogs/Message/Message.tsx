import React, { FC } from 'react';
import s from './Message.module.css';
import { MessagePropsType } from '../../../index';

export const Message: FC<MessagePropsType> = ({ message }) => {
  return <li className={s.message}>{message}</li>;
};
