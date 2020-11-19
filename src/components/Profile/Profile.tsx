import React, { FC } from 'react';
import s from './Profile.module.css';
import { MyPosts } from './MyPosts';
import { ProfileInfo } from './ProfileInfo';

export const Profile: FC = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};
