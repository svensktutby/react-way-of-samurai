import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

type PropsType = {};

type DialogItemPropsType = {
  name: string;
  id: number;
};

type MessagePropsType = {
  message: string;
};

export const Dialogs: FC<PropsType> = (props: PropsType) => {
  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsList}>
        <DialogItem name="Andrei" id={1} />
        <DialogItem name="John Doe" id={2} />
        <DialogItem name="Patrick" id={3} />
        <DialogItem name="Someone" id={4} />
      </ul>
      <ul className={s.messages}>
        <Message message="Hi" />
        <Message message="Hi, dude!" />
        <Message message="You" />
      </ul>
    </div>
  );
};

const DialogItem: FC<DialogItemPropsType> = (props: DialogItemPropsType) => {
  const { name, id } = props;
  const path = `/dialogs/${id}`;

  return (
    <li className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {name}
      </NavLink>
    </li>
  );
};

const Message: FC<MessagePropsType> = (props: MessagePropsType) => {
  const { message } = props;

  return <li className={s.message}>{message}</li>;
};
