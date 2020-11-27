import React, { FC } from 'react';
import s from './Profile.module.css';
import { MyPosts } from './MyPosts';
import { ProfileInfo } from './ProfileInfo';
import { PostType } from '../../redux/state';

type ProfilePropsType = {
  state: {
    posts: Array<PostType>;
  };
  addPostCallback: (postMessage: string) => void;
};

export const Profile: FC<ProfilePropsType> = ({
  state: { posts },
  addPostCallback,
}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} addPostCallback={addPostCallback} />
    </div>
  );
};
