import { FormValues } from '../shared/constants/form';
import { createСipher } from './cipher';

export const loadNamesFromLS = (): Array<string> => {
  if (!localStorage.getItem('j13o-names')) localStorage.setItem('j13o-names', JSON.stringify([]));
  return JSON.parse(localStorage.getItem('j13o-names') as string);
};

export const checkNameAvailable = (name: string, registeredNames: Array<string>) =>
  !registeredNames.includes(name);

export const checkPass = (name: string, pass: string) => {
  const password = createСipher(pass);
  return localStorage.getItem(`${name}---${password}`) ? true : false;
};

export const saveNewUser = (
  name: string,
  password: string,
  history: Array<FormValues>,
  favourites: Array<number>
) => {
  const lsNameValue = `${name}---${createСipher(password)}`;
  const user = new NewUser(name, lsNameValue, history, favourites);
  localStorage.setItem(lsNameValue, JSON.stringify(user));
};

export const saveUserData = (user: IUser) => {
  localStorage.setItem(user.lsName, JSON.stringify(user));
};

export const loadUser = (name: string, pass: string) => {
  const password = createСipher(pass);
  const loadedJsonUser = localStorage.getItem(`${name}---${password}`);
  if (!loadedJsonUser) throw new Error('Loading failed');
  return JSON.parse(loadedJsonUser) as IUser;
};

export interface IUser {
  name: string;
  lsName: string;
  history: Array<FormValues>;
  favourites: Array<number>;
}

class NewUser implements IUser {
  name: string;
  lsName: string;
  history: Array<FormValues>;
  favourites: Array<number>;

  constructor(name: string, lsName: string, history: Array<FormValues>, favourites: Array<number>) {
    this.name = name;
    this.lsName = lsName;
    this.history = history;
    this.favourites = favourites;
  }
}
