import React, { FC } from 'react';
import s from './Profile.module.css';
import { MyPosts } from './MyPosts';
import { ProfileInfo } from './ProfileInfo';
import { PostType } from '../../redux/state';

type ProfilePropsType = {
  profilePage: {
    posts: Array<PostType>;
    newPostText: string;
  };
  addPostCallback: () => void;
  updateNewPostTextCallback: (newText: string) => void;
};

export const Profile: FC<ProfilePropsType> = ({
  profilePage: { posts, newPostText },
  addPostCallback,
  updateNewPostTextCallback,
}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        newPostText={newPostText}
        addPostCallback={addPostCallback}
        updateNewPostTextCallback={updateNewPostTextCallback}
      />
    </div>
  );
};
