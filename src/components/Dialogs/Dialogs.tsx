import React, { FC } from 'react';

import s from './Dialogs.module.css';
import { DialogsPageStateType } from '../../redux/dialogsReducer';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import {
  AddMessageFormDataType,
  AddMessageFormRedux,
} from './AddMessageForm/AddMessageForm';

export type StatePropsType = {
  dialogsPage: DialogsPageStateType;
};

export type DispatchPropsType = {
  sendMessage: (message: string) => void;
};

export const Dialogs: FC<StatePropsType & DispatchPropsType> = ({
  dialogsPage: { dialogs, messages },
  sendMessage,
}) => {
  const sendMessageHandler = (formData: AddMessageFormDataType) => {
    sendMessage(formData.message);
  };

  const dialogsElements = dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  const messagesElements = messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsList}>{dialogsElements}</ul>

      <div className={s.chat}>
        <ul className={s.messagesList}>{messagesElements}</ul>

        <div>
          <div>
            <AddMessageFormRedux onSubmit={sendMessageHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};
