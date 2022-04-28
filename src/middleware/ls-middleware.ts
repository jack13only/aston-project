import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { setName } from '../reducers/locastorage-slice';

export const localStorageMiddleware = () => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  if (setName.match(action)) {
    const lsNames = JSON.parse(localStorage.getItem('j13o-names') as string);
    lsNames.push(action.payload);
    localStorage.setItem('j13o-names', JSON.stringify(lsNames));
  }
  // if (action.type === 'rimApi/executeQuery/fulfilled') {
  //   console.log(action.meta?.arg);
  // }
  return next(action);
};
