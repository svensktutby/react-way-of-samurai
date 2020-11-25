import React, { FC } from 'react';
import s from './Profile.module.css';
import { MyPosts } from './MyPosts';
import { ProfileInfo } from './ProfileInfo';
import { PostType } from '../../redux/state';

type PropsType = {
  state: {
    posts: Array<PostType>;
  };
};

export const Profile: FC<PropsType> = ({ state: { posts } }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
};
