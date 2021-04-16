import React, { FC } from 'react';
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';

import s from './FormsControls.module.css';

type FormControlPropsType = {
  meta: WrappedFieldMetaProps;
  className?: string;
};

export const FormControl: FC<FormControlPropsType> = ({
  meta: { touched, error },
  children,
  className = '',
}) => {
  const hasError = touched && error;

  const formControlClassName = `${s.formControl} ${className} ${
    hasError && s.formControlError
  }`;

  return (
    <div className={formControlClassName}>
      {hasError && <span className={`${s.error}`}>{error}</span>}

      {children}
    </div>
  );
};

export const Textarea: FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input: FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input type="text" {...input} {...restProps} />
    </FormControl>
  );
};
