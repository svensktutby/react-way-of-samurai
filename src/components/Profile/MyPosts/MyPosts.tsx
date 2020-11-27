import React, { FC, useRef } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post';
import { PostType } from '../../../redux/state';

type MyPostsPropsType = {
  posts: Array<PostType>;
  addPostCallback: (postMessage: string) => void;
};

export const MyPosts: FC<MyPostsPropsType> = ({ posts, addPostCallback }) => {
  // const [, updateState] = React.useState<object>();
  // const forceUpdate = React.useCallback(() => updateState({}), []);

  const postsElements = posts.map((p) => (
    <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const newPostElement = useRef<HTMLTextAreaElement>(null);

  const addPostHandler = () => {
    const elem = newPostElement.current;

    if (elem && elem.value.length) {
      addPostCallback(elem.value);
      elem.value = '';
      // forceUpdate();
    }
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement} />
        <button onClick={addPostHandler}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
