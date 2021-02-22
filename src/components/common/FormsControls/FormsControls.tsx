import React, { FC } from 'react';
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';

import s from './FormsControls.module.css';

type FormsControlPropsType = {
  meta: WrappedFieldMetaProps;
  className?: string;
};

export const FormsControl: FC<FormsControlPropsType> = ({
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
    <FormsControl {...props}>
      <textarea placeholder="Write here..." {...input} {...restProps} />
    </FormsControl>
  );
};

export const Input: FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <FormsControl {...props}>
      <input
        type="text"
        placeholder="Write here..."
        {...input}
        {...restProps}
      />
    </FormsControl>
  );
};
