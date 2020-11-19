import React, { FC } from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo: FC = () => {
  return (
    <div>
      <div>
        <img
          className={s.signboard}
          src="https://image.shutterstock.com/image-photo/amsterdam-canal-street-view-long-260nw-739294837.jpg"
          alt="Top background"
        />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};
