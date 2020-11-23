import React, { FC } from 'react';
import s from './Profile.module.css';
import { MyPosts } from './MyPosts';
import { ProfileInfo } from './ProfileInfo';
import { PostPropsType } from '../../index';

type ProfilePropsType = {
  posts: Array<PostPropsType>;
};

export const Profile: FC<ProfilePropsType> = ({ posts }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
};
