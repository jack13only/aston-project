import { rimUrl } from '../shared/constants/api-urls';

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

export async function fetchFilteredCharacters(name: string) {
  try {
    const res = await fetch(`${rimUrl}?name=${name}`);
    const result = await res.json();
    return result.results;
  } catch (error) {
    return [];
  }
}
