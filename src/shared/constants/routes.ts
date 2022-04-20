interface IPATH {
  main: string;
  id: string;
  notFound: string;
}

export const PATHS: IPATH = {
  main: '/',
  id: '/:id',
  notFound: '*',
};
