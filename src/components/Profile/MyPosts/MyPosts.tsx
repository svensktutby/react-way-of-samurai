import React, { FC } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post';
import { PostType } from '../../../redux/state';

type PropsType = {
  posts: Array<PostType>;
};

export const MyPosts: FC<PropsType> = ({ posts }) => {
  const postsElements = posts.map((p) => (
    <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />
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
