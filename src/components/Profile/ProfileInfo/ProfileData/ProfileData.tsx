import React, { FC } from 'react';

import styleBtn from '../../../common/styles/button.module.css';
import { ProfileType } from '../../../../types/types';
import { ProfileContacts } from './ProfileContacts/ProfileContacts';

type ProfileDataPropsType = {
  isOwner: boolean;
  profile: ProfileType;
  turnOnEditMode: () => void;
};

export const ProfileData: FC<ProfileDataPropsType> = ({
  isOwner,
  profile,
  turnOnEditMode,
}) => {
  const {
    fullName,
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription,
  } = profile;

  return (
    <div>
      {isOwner && (
        <div>
          <button
            className={styleBtn.btn}
            type="button"
            onClick={turnOnEditMode}
          >
            Edit
          </button>
        </div>
      )}

      <div>{fullName}</div>

      <div>
        {lookingForAJob ? 'Available for work' : 'Not available for work'}
      </div>

      {lookingForAJob && (
        <div>
          <span>My skills: </span>
          {lookingForAJobDescription}
        </div>
      )}

      <div>
        <span>About me: </span>
        {aboutMe}
      </div>

      <div>
        <span>Contacts: </span>
        <ProfileContacts contacts={contacts} />
      </div>
    </div>
  );
};
