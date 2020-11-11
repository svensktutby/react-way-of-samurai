import React from 'react';
import classes from './MyPosts.module.css';
import { Post } from './Post';

export const MyPosts: React.FC = () => {
  const { posts } = classes;

  return (
    <div>
      My posts
      <div>
        <textarea />
        <button>Add post</button>
      </div>
      <div className={posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
