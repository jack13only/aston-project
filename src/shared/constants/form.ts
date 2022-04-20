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

const defaultFiltersValues = {
  name: '',
  status: '',
  gender: '',
  species: '',
};

export { STATUS, GENDER, SPECIES, defaultFiltersValues };
