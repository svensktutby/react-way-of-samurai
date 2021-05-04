import React, { FC, memo } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

import { FilterType } from '../../types/types';
import { transformValues } from '../../utils/formikUtils';

type PropsType = {
  changeFilterHandler: (filter: FilterType) => void;
};

type FormFilterType = {
  term: string;
  friend: 'true' | 'false' | 'null';
};

export const UsersSearchForm: FC<PropsType> = memo(
  ({ changeFilterHandler }) => {
    const initialValues: FormFilterType = { term: '', friend: 'null' };

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
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
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
