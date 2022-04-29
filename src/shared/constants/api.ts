export const rimUrl = 'https://rickandmortyapi.com/api';

export interface RiMObject {
  created: string;
  episode: Array<string>;
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

export const remakeData = (data: Array<RiMObject> | RiMObject): Array<RiMObject> | null => {
  if (Array.isArray(data)) return data;
  if (data?.id) return [data];
  return [];
};
