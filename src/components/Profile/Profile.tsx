import React, { FC } from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { StoreType } from '../../redux/redux-store';

type ProfilePropsType = {
  store: StoreType;
};

export const Profile: FC<ProfilePropsType> = ({ store }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </div>
  );
};
