import React, { ChangeEvent, FC } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post';
import { PostType } from '../../../redux/state';

type MyPostsPropsType = {
  posts: Array<PostType>;
  newPostText: string;
  addPostCallback: () => void;
  updateNewPostTextCallback: (newText: string) => void;
};

export const MyPosts: FC<MyPostsPropsType> = ({
  posts,
  newPostText,
  addPostCallback,
  updateNewPostTextCallback,
}) => {
  // const [, updateState] = React.useState<object>();
  // const forceUpdate = React.useCallback(() => updateState({}), []);

  const postsElements = posts.map((p) => (
    <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const addPostHandler = () => {
    addPostCallback();
    // forceUpdate();
  };

  const changePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateNewPostTextCallback(e.currentTarget.value);
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
