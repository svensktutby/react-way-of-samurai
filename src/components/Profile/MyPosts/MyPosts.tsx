import React, { FC } from 'react';

import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostType } from '../../../types/types';
import {
  AddPostFormDataType,
  AddPostFormRedux,
} from './AddPostForm/AddPostForm';

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

  const addPostHandler = (formData: AddPostFormDataType) => {
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
