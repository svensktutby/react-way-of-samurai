import React, { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import s from './AddMessageForm.module.css';
import styleBtn from '../../common/styles/Button.module.css';
import { maxLengthCreator, required } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength100 = maxLengthCreator(100);

export type AddMessageFormDataType = {
  message: string;
};

const AddMessageForm: FC<InjectedFormProps<AddMessageFormDataType>> = ({
  handleSubmit,
}) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        name="message"
        placeholder="Enter your message..."
        validate={[required, maxLength100]}
      />

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
