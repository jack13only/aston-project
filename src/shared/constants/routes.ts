interface IPATH {
  main: string;
  id: string;
  notFound: string;
  search: string;
  signin: string;
  signup: string;
  favourites: string;
  history: string;
}

export const PATHS: IPATH = {
  main: '/',
  search: '/search',
  id: '/search/:id',
  signin: '/signin',
  signup: '/signup',
  favourites: '/favourites',
  history: '/history',
  notFound: '*',
};
