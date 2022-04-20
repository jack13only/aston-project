export const removeEmptyFields = (obj: { [key: string]: string }): { [key: string]: string } =>
  Object.fromEntries(Object.entries(obj).filter((item) => item[1]));
