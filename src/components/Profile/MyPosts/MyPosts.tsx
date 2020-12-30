import React, { ChangeEvent, FC } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostType } from '../../../types/types';

export type StatePropsType = {
  posts: Array<PostType>;
  newPostText: string;
};

export type DispatchPropsType = {
  addPost: () => void;
  changePost: (payload: string) => void;
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
        <textarea onChange={changePostHandler} value={newPostText} />
        <button onClick={addPostHandler}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
