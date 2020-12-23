import React, { FC } from 'react';
import { addPostAC, changePostAC } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';
import { StoreType } from '../../../redux/redux-store';

type MyPostsContainerPropsType = {
  store: StoreType;
};

export const MyPostsContainer: FC<MyPostsContainerPropsType> = ({
  store: { getState, dispatch },
}) => {
  const {
    profilePage: { newPostText, posts },
  } = getState();

  const addPostCallback = () => {
    dispatch(addPostAC());
  };

  const changePostCallback = (payload: string) => {
    dispatch(changePostAC(payload));
  };

  return (
    <MyPosts
      posts={posts}
      newPostText={newPostText}
      addPost={addPostCallback}
      changePost={changePostCallback}
    />
  );
};
