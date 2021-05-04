export const transformValues = (value: string): boolean | null => {
  switch (value) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return null;
  }
};
