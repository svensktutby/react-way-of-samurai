import React, { memo } from 'react';
import type { FC } from 'react';
import { Formik, Field, Form } from 'formik';
import type { FormikHelpers } from 'formik';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { transformValues } from '../../utils/formikUtils';
import type { FilterType } from '../../types/types';
import { getUsersFilter } from '../../redux/usersSelectors';

type PropsType = {
  changeFilterHandler: (filter: FilterType) => void;
};

type FriendFormType = 'true' | 'false' | 'null';
type FormFilterType = {
  term: string;
  friend: FriendFormType;
};

export const UsersSearchForm: FC<PropsType> = memo(
  ({ changeFilterHandler }) => {
    const filter = useTypedSelector(getUsersFilter);
    const initialValues: FormFilterType = {
      term: filter.term,
      friend: String(filter.friend) as FriendFormType,
    };

    const submitHandler = (
      { term, friend }: FormFilterType,
      { setSubmitting }: FormikHelpers<FormFilterType>,
    ) => {
      const values: FilterType = {
        term,
        friend: transformValues(friend),
      };

      changeFilterHandler(values);
      setSubmitting(false);
    };

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />

            <Field name="friend" as="select">
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>

            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    );
  },
);

UsersSearchForm.displayName = 'UsersSearchForm';
