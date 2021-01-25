import React, { FC } from 'react';

import s from './ProfileInfo.module.css';
import userAvatar from '../../../assets/images/userAvatar.svg';
import { ProfileType } from '../../../types/types';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

type ProfileInfoPropsType = {
  profile: ProfileType | null;
};

export const ProfileInfo: FC<ProfileInfoPropsType> = ({ profile }) => {
  if (!profile) {
    return <Preloader text="Loading..." />;
  }

  return (
    <div className={s.profileInfo}>
      <img
        className={s.avatar}
        src={profile.photos.large || userAvatar}
        alt={`${profile.fullName} avatar`}
      />
      <ProfileStatus status="Yo, dudes!" />
    </div>
  );
};
