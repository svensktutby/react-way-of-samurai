import React, { FC } from 'react';

import s from './ProfileContacts.module.css';
import styleLink from '../../../common/styles/link.module.css';
import { randomId } from '../../../../utils/randomId';
import { ContactsType } from '../../../../types/types';

type ProfileContactPropsType = {
  contacts: ContactsType;
};

export const ProfileContacts: FC<ProfileContactPropsType> = ({ contacts }) => {
  return (
    <ul className={s.list}>
      {Object.entries(contacts).map(([title, link]) => (
        <li key={randomId()}>
          <a
            className={styleLink.link}
            href={link || 'https://github.com/svensktutby'}
            target="_blank"
            rel="noreferrer noopener"
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};
