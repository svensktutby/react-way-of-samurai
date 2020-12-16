import React, { FC } from 'react';
import { MyPosts } from './MyPosts';
import { ProfileInfo } from './ProfileInfo';
import { ActionsType, PostType } from '../../redux/state';

type ProfilePropsType = {
  profilePage: {
    posts: Array<PostType>;
    newPostText: string;
  };
  dispatch: (action: ActionsType) => void;
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
