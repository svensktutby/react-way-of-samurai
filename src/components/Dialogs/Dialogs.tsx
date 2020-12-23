import React, { ChangeEvent, FC } from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import {
  changeMessageAC,
  DialogsPageActionTypes,
  sendMessageAC,
} from '../../redux/dialogsReducer';
import { DialogItemType, MessageType } from '../../redux/types';

type DialogsPropsType = {
  dialogsPage: {
    dialogs: Array<DialogItemType>;
    messages: Array<MessageType>;
    newMessageText: string;
  };
  dispatch: (action: DialogsPageActionTypes) => void;
};

export const Dialogs: FC<DialogsPropsType> = ({
  dialogsPage: { dialogs, messages, newMessageText },
  dispatch,
}) => {
  const sendMessageHandler = () => {
    dispatch(sendMessageAC());
  };

  const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeMessageAC(e.currentTarget.value));
  };

  const dialogsElements = dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  const messagesElements = messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsList}>{dialogsElements}</div>
      <div className={s.messagesList}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              onChange={changeMessageHandler}
              value={newMessageText}
              placeholder="Write here..."
            />
            <div>
              <button onClick={sendMessageHandler}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
