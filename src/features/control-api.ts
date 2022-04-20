import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', status: '', gender: '', species: '' };

const filtersApiSlice = createSlice({
  name: 'filtersApi',
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
    changeGender(state, action) {
      state.gender = action.payload;
    },
    changeSpecies(state, action) {
      state.species = action.payload;
    },
    changeAllFilters(state, action) {
      return action.payload;
    },
  },
});

export const { changeName, changeStatus, changeGender, changeSpecies, changeAllFilters } =
  filtersApiSlice.actions;
export default filtersApiSlice.reducer;
