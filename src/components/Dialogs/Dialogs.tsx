import React, { FC } from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem';
import { Message } from './Message';
import { DialogItemPropsType, MessagePropsType } from '../../index';

type PropsType = {
  dialogs: Array<DialogItemPropsType>;
  messages: Array<MessagePropsType>;
};

export const Dialogs: FC<PropsType> = ({ dialogs, messages }) => {
  const dialogsElements = dialogs.map((d) => (
    <DialogItem
      key={(Math.random() * 1e8).toString(16)}
      name={d.name}
      id={d.id}
    />
  ));

  const messagesElements = messages.map((m) => (
    <Message
      key={(Math.random() * 1e8).toString(16)}
      message={m.message}
      id={m.id}
    />
  ));

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsList}>{dialogsElements}</ul>
      <ul className={s.messages}>{messagesElements}</ul>
    </div>
  );
};