import React, { FC } from 'react';
import { Field } from 'redux-form';

import s from './ProfileContacts.module.css';
import styleLink from '../../../../common/styles/link.module.css';
import { randomId } from '../../../../../utils/randomId';
import { ContactsType } from '../../../../../types/types';
import { Input } from '../../../../common/FormsControls/FormsControls';

type ProfileContactPropsType = {
  contacts: ContactsType;
  editMode?: boolean;
};

export const ProfileContacts: FC<ProfileContactPropsType> = ({
  contacts,
  editMode,
}) => {
  return (
    <ul className={s.list}>
      {Object.entries(contacts).map(([title, link]) => (
        <li key={randomId()}>
          {editMode ? (
            <Field
              component={Input}
              name={`contacts.${title}`}
              placeholder={`Link to ${title}`}
            />
          ) : (
            link && (
              <a
                className={styleLink.link}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {title}
              </a>
            )
          )}
        </li>
      ))}
    </ul>
  );
};
