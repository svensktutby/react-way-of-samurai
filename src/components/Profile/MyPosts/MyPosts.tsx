import React, { FC } from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostType } from '../../../types/types';
import styleBtn from '../../common/styles/Button.module.css';
import styleInput from '../../common/styles/Input.module.css';

type FormDataType = {
  post: string;
};

const AddPostForm: FC<InjectedFormProps<FormDataType>> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styleInput.inputWrapper} ${s.messageWrapper}`}>
        <Field
          className={`${styleInput.input} ${s.message}`}
          component="textarea"
          name="post"
          placeholder="Write here..."
        />
      </div>
      <button type="submit" className={styleBtn.btn}>
        Add post
      </button>
    </form>
  );
};

const AddPostFormRedux = reduxForm<FormDataType>({
  form: 'profileAddPostForm',
})(AddPostForm);

export type StatePropsType = {
  posts: Array<PostType>;
};

export type DispatchPropsType = {
  addPost: (text: string) => void;
};

export const MyPosts: FC<StatePropsType & DispatchPropsType> = ({
  posts,
  addPost,
}) => {
  const postsElements = posts.map((p) => (
    <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const addPostHandler = (formData: FormDataType) => {
    addPost(formData.post);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>

      <AddPostFormRedux onSubmit={addPostHandler} />

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
