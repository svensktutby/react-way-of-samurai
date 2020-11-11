import React from 'react';
import classes from './Profile.module.css';
import { MyPosts } from './MyPosts';

export const Profile: React.FC = () => {
  const { content, signboard } = classes;

  return (
    <main className={content}>
      <img
        className={signboard}
        src="https://image.shutterstock.com/image-photo/amsterdam-canal-street-view-long-260nw-739294837.jpg"
        alt="Top background"
      />
      <div>ava + description</div>
      <MyPosts />
    </main>
  );
};
