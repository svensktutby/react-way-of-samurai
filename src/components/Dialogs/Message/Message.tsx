import React, { FC } from 'react';

import s from './Message.module.css';
import { MessageType } from '../../../types/types';

export const Message: FC<MessageType> = ({ message }) => {
  return (
    <li className={s.message}>
      <span className={s.text}>{message}</span>
    </li>
  );
};
