export const createСipher = (password: string) => {
  return password
    .split('')
    .map((item) => item.charCodeAt(0))
    .reverse()
    .join('x');
};

export const checkСipher = (value: string) => {
  return value
    .split('x')
    .map((item) => String.fromCharCode(+item))
    .reverse()
    .join('');
};
