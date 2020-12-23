import React, { FC } from 'react';
import { addPostAC, changePostAC } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';
import { StoreType } from '../../../redux/redux-store';

type MyPostsContainerPropsType = {
  store: StoreType;
};

export const MyPostsContainer: FC<MyPostsContainerPropsType> = ({ store }) => {
  const {
    profilePage: { newPostText, posts },
  } = store.getState();

  const { dispatch } = store;

  const addPost = () => {
    dispatch(addPostAC());
  };

  const changePost = (payload: string) => {
    dispatch(changePostAC(payload));
  };

  return (
    <MyPosts
      posts={posts}
      newPostText={newPostText}
      addPost={addPost}
      changePost={changePost}
    />
  );
};
