type FieldValidatorType = (value: string) => string | undefined;

export const required: FieldValidatorType = (value) => {
  return value ? undefined : 'Field is required';
};

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (
  value,
) => {
  return value && value.length > maxLength
    ? `Max length is ${maxLength} symbols`
    : undefined;
};
