import React, { FC } from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types/types';

type ProfilePropsType = {
  profile: ProfileType | null;
};

export const Profile: FC<ProfilePropsType> = ({ profile }) => {
  return (
    <div>
      <ProfileInfo profile={profile} />
      <MyPostsContainer />
    </div>
  );
};
