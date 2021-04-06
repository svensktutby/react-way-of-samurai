import React, { FC } from 'react';

import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types/types';

type ProfilePropsType = {
  isOwner: boolean;
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
};

export const Profile: FC<ProfilePropsType> = ({
  isOwner,
  profile,
  status,
  updateStatus,
  savePhoto,
}) => {
  return (
    <div>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
      />

      <MyPostsContainer />
    </div>
  );
};
