interface IPATH {
  main: string;
  id: string;
  notFound: string;
  search: string;
}

export const PATHS: IPATH = {
  main: '/',
  search: '/search',
  id: '/search/:id',
  notFound: '*',
};
