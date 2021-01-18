import React, { ChangeEvent, FC } from 'react';

import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostType } from '../../../types/types';
import styleBtn from '../../common/styles/Button.module.css';
import styleInput from '../../common/styles/Input.module.css';

export type StatePropsType = {
  posts: Array<PostType>;
  newPostText: string;
};

export type DispatchPropsType = {
  addPost: () => void;
  changePost: (text: string) => void;
};

export const MyPosts: FC<StatePropsType & DispatchPropsType> = ({
  posts,
  newPostText,
  addPost,
  changePost,
}) => {
  const postsElements = posts.map((p) => (
    <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const addPostHandler = () => {
    addPost();
  };

  const changePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changePost(e.currentTarget.value);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <label className={`${styleInput.inputWrapper} ${s.messageWrapper}`}>
          <textarea
            className={`${styleInput.input} ${s.message}`}
            onChange={changePostHandler}
            value={newPostText}
          />
        </label>
        <button type="button" className={styleBtn.btn} onClick={addPostHandler}>
          Add post
        </button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
