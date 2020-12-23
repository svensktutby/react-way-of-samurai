import React, { FC } from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfilePageActionTypes } from '../../redux/profileReducer';
import { PostType } from '../../redux/types';

type ProfilePropsType = {
  profilePage: {
    posts: Array<PostType>;
    newPostText: string;
  };
  dispatch: (action: ProfilePageActionTypes) => void;
};

export const Profile: FC<ProfilePropsType> = ({
  profilePage: { posts, newPostText },
  dispatch,
}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} newPostText={newPostText} dispatch={dispatch} />
    </div>
  );
};
