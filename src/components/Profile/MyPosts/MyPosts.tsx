import React, { ChangeEvent, FC } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostType } from '../../../redux/types';

type MyPostsPropsType = {
  posts: Array<PostType>;
  newPostText: string;
  addPost: () => void;
  changePost: (payload: string) => void;
};

export const MyPosts: FC<MyPostsPropsType> = ({
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
