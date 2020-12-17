import React, { FC } from 'react';
import s from './Message.module.css';
import { MessageType } from '../../../redux/state';

export const Message: FC<MessageType> = ({ message }) => {
  return <div className={s.message}>{message}</div>;
};
