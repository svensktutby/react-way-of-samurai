import React, { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import s from './AddPostForm.module.css';
import styleBtn from '../../../common/styles/Button.module.css';
import { maxLengthCreator, required } from '../../../../utils/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLength100 = maxLengthCreator(100);

export type AddPostFormDataType = {
  post: string;
};

const AddPostForm: FC<InjectedFormProps<AddPostFormDataType>> = ({
  handleSubmit,
}) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        name="post"
        placeholder="Enter your message..."
        validate={[required, maxLength100]}
      />

      <button type="submit" className={styleBtn.btn}>
        Add post
      </button>
    </form>
  );
};

export const AddPostFormRedux = reduxForm<AddPostFormDataType>({
  form: 'profileAddPostForm',
})(AddPostForm);
