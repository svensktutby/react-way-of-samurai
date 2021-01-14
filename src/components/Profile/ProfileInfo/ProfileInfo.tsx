import React, { FC } from 'react';
import s from './ProfileInfo.module.css';
import { ProfileType } from '../../../types/types';
import userAvatar from '../../../assets/images/userAvatar.svg';
import { Preloader } from '../../common/Preloader/Preloader';

type ProfileInfoPropsType = {
  profile: ProfileType | null;
};

export const ProfileInfo: FC<ProfileInfoPropsType> = ({ profile }) => {
  if (!profile) {
    return <Preloader text="Loading..." />;
  }

  return (
    <div>
      <div>
        <img
          className={s.signboard}
          src="https://image.shutterstock.com/image-photo/amsterdam-canal-street-view-long-260nw-739294837.jpg"
          alt="Top background"
        />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userAvatar} alt="User" />
        ava + description
      </div>
    </div>
  );
};
