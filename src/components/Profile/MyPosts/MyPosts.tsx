import React, { FC } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post';

export const MyPosts: FC = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea />
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, dude!" likesCount={18} />
        <Post message="It's not my first post" likesCount={3} />
      </div>
    </div>
  );
};
