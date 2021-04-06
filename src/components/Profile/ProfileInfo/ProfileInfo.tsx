import React, { ChangeEvent, FC } from 'react';

import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/userAvatar.svg';
import { ProfileType } from '../../../types/types';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

type ProfileInfoPropsType = {
  isOwner: boolean;
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
};

export const ProfileInfo: FC<ProfileInfoPropsType> = ({
  isOwner,
  profile,
  status,
  updateStatus,
  savePhoto,
}) => {
  if (!profile) {
    return <Preloader text="Loading..." />;
  }

  const addUserPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={s.profileInfo}>
      <div className={s.photoWrapper}>
        <img
          className={s.photo}
          src={profile.photos.large || userPhoto}
          alt={`${profile.fullName}`}
        />

        {isOwner && (
          <label className={s.label} title="Add photo">
            <input
              className={s.inputFile}
              type="file"
              onChange={addUserPhotoHandler}
            />
            <svg
              className={s.icon}
              viewBox="0 0 32 32"
              width="32"
              version="1.1"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z" />
            </svg>
          </label>
        )}
      </div>

      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
};
