import React, { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import s from './ProfileDataForm.module.css';
import styleBtn from '../../../../common/styles/button.module.css';
import { ProfileType } from '../../../../../types/types';
import { ProfileContacts } from '../ProfileContacts/ProfileContacts';
import {
  Input,
  Textarea,
} from '../../../../common/FormsControls/FormsControls';

type PropsType = {
  profile: ProfileType;
  editMode: boolean;
};

export const ProfileDataForm: FC<
  InjectedFormProps<ProfileType, PropsType> & PropsType
> = ({ handleSubmit, error, profile: { contacts }, editMode }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className={`${s.errorWrapper}`}>
          {error && <span className={`${s.error}`}>{error}</span>}
        </div>

        <button className={styleBtn.btn} type="submit">
          Save
        </button>
      </div>

      <div>
        <Field component={Input} name="fullName" placeholder="Full name" />
      </div>

      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={s.checkboxFieldWrapper}>
          <Field
            className={s.checkboxField}
            component={Input}
            name="lookingForAJob"
            type="checkbox"
          />
          <span>Available for work</span>
        </label>
      </div>

      <div>
        <Field
          className={s.textareaField}
          component={Textarea}
          name="lookingForAJobDescription"
          placeholder="My skills"
        />
      </div>

      <div>
        <Field
          className={s.textareaField}
          component={Textarea}
          name="aboutMe"
          placeholder="About me"
        />
      </div>

      <div>
        <span>Contacts: </span>
        <ProfileContacts contacts={contacts} editMode={editMode} />
      </div>
    </form>
  );
};

export const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({
  form: 'edit-profile',
})(ProfileDataForm);
