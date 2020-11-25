import React, { FC } from 'react';
import s from './Message.module.css';
import { MessageType } from '../../../redux/state';

export const Message: FC<MessageType> = ({ message }) => {
  return <li className={s.message}>{message}</li>;
};
