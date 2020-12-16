import React, { ChangeEvent, FC } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post';
import {
  ActionsType,
  PostType,
  addPostAC,
  changePostAC,
} from '../../../redux/state';

type MyPostsPropsType = {
  posts: Array<PostType>;
  newPostText: string;
  dispatch: (action: ActionsType) => void;
};

export const MyPosts: FC<MyPostsPropsType> = ({
  posts,
  newPostText,
  dispatch,
}) => {
  const postsElements = posts.map((p) => (
    <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const addPostHandler = () => {
    dispatch(addPostAC());
  };

  const changePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changePostAC(e.currentTarget.value));
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
