import React, { ChangeEvent, FC } from 'react';

import s from './ProfileInfo.module.css';
import styleBtn from '../../common/styles/button.module.css';
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
      </div>

      {isOwner && (
        <div className={s.btnWrapper}>
          <label className={styleBtn.btn}>
            <input
              className={s.inputFile}
              type="file"
              onChange={addUserPhotoHandler}
            />
            <span>Add photo</span>
          </label>
        </div>
      )}

      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
};
