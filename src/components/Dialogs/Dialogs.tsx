import React, { ChangeEvent, FC } from 'react';

import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { DialogsPageStateType } from '../../redux/dialogsReducer';
import styleInput from '../common/styles/Input.module.css';
import styleBtn from '../common/styles/Button.module.css';

export type StatePropsType = {
  dialogsPage: DialogsPageStateType;
};

export type DispatchPropsType = {
  changeMessage: (message: string) => void;
  sendMessage: () => void;
};

export const Dialogs: FC<StatePropsType & DispatchPropsType> = ({
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
            <label className={`${styleInput.inputWrapper} ${s.messageWrapper}`}>
              <textarea
                className={`${styleInput.input} ${s.message}`}
                onChange={changeMessageHandler}
                value={newMessageText}
                placeholder="Write here..."
              />
            </label>
            <div>
              <button
                type="button"
                className={styleBtn.btn}
                onClick={sendMessageHandler}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
