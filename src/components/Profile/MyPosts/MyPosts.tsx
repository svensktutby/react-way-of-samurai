import React, { FC } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post';
import { PostPropsType } from '../../../index';

type MyPostsPropsType = {
  posts: Array<PostPropsType>;
};

export const MyPosts: FC<MyPostsPropsType> = ({ posts }) => {
  const postsElements = posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea />
        <button>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
