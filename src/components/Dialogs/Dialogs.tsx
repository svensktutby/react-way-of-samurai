import React, { ChangeEvent, FC } from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { DialogsPageType } from '../../redux/dialogsReducer';

type DialogsPropsType = {
  dialogsPage: DialogsPageType;
  changeMessage: (payload: string) => void;
  sendMessage: () => void;
};

export const Dialogs: FC<DialogsPropsType> = ({
  dialogsPage: { dialogs, messages, newMessageText },
  changeMessage,
  sendMessage,
}) => {
  const sendMessageHandler = () => {
    sendMessage();
  };

  const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeMessage(e.currentTarget.value);
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
