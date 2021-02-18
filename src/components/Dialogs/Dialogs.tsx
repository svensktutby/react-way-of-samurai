import React, { FC } from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { DialogsPageStateType } from '../../redux/dialogsReducer';
import styleInput from '../common/styles/Input.module.css';
import styleBtn from '../common/styles/Button.module.css';

type FormDataType = {
  message: string;
};

const AddMessageForm: FC<InjectedFormProps<FormDataType>> = ({
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styleInput.inputWrapper} ${s.messageWrapper}`}>
        <Field
          className={`${styleInput.input} ${s.message}`}
          component="textarea"
          name="message"
          placeholder="Write here..."
        />
      </div>
      <div>
        <button type="submit" className={styleBtn.btn}>
          Send
        </button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm<FormDataType>({
  form: 'dialogAddMessageForm',
})(AddMessageForm);

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
  const sendMessageHandler = (formData: FormDataType) => {
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
      <div className={s.dialogsList}>{dialogsElements}</div>

      <div className={s.messagesList}>
        <div>{messagesElements}</div>

        <div>
          <div>
            <AddMessageFormRedux onSubmit={sendMessageHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};
