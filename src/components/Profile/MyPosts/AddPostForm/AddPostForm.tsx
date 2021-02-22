import React, { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import s from './AddPostForm.module.css';
import styleInput from '../../../common/styles/Input.module.css';
import styleBtn from '../../../common/styles/Button.module.css';

export type AddPostFormDataType = {
  post: string;
};

const AddPostForm: FC<InjectedFormProps<AddPostFormDataType>> = ({
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styleInput.inputWrapper} ${s.messageWrapper}`}>
        <Field
          className={`${styleInput.input} ${s.message}`}
          component="textarea"
          name="post"
          placeholder="Enter your message..."
        />
      </div>

      <button type="submit" className={styleBtn.btn}>
        Add post
      </button>
    </form>
  );
};

export const AddPostFormRedux = reduxForm<AddPostFormDataType>({
  form: 'profileAddPostForm',
})(AddPostForm);
