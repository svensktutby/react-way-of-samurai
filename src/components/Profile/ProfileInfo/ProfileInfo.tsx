import React, { FC } from 'react';

import s from './ProfileInfo.module.css';
import userAvatar from '../../../assets/images/userAvatar.svg';
import { ProfileType } from '../../../types/types';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

type ProfileInfoPropsType = {
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
};

export const ProfileInfo: FC<ProfileInfoPropsType> = ({
  profile,
  status,
  updateStatus,
}) => {
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
      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
};
