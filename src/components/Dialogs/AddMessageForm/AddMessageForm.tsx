import React, { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import s from './AddMessageForm.module.css';
import styleInput from '../../common/styles/Input.module.css';
import styleBtn from '../../common/styles/Button.module.css';

export type AddMessageFormDataType = {
  message: string;
};

const AddMessageForm: FC<InjectedFormProps<AddMessageFormDataType>> = ({
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

export const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({
  form: 'dialogAddMessageForm',
})(AddMessageForm);
