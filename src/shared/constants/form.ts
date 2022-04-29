const STATUS = ['', 'Alive', 'Dead', 'unknown'];
const GENDER = ['', 'Female', 'Male', 'Genderless', 'unknown'];
const SPECIES = [
  '',
  'Human',
  'Alien',
  'Humanoid',
  'Animal',
  'Robot',
  'Cronenberg',
  'Disease',
  'unknown',
];

export const defaultFiltersValues: FormValues = {
  name: '',
  status: '',
  gender: '',
  species: '',
  page: '1',
};

export type FormValues = {
  name: string;
  status: string;
  gender: string;
  species: string;
  page: string;
};

const createParams = (params: URLSearchParams, hiddenParams: boolean): FormValues => {
  const newObj = { ...defaultFiltersValues };
  newObj.name = params.get('name') ?? '';
  newObj.page = params.get('page') ?? '1';
  if (!hiddenParams) {
    newObj.status = params.get('status') ?? '';
    newObj.gender = params.get('gender') ?? '';
    newObj.species = params.get('species') ?? '';
  }
  return newObj;
};

export const formHelpers = {
  STATUS,
  GENDER,
  SPECIES,
  defaultFiltersValues,
  createParams,
};
