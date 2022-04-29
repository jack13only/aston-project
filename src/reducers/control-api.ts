import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', status: '', gender: '', species: '', page: 1 };

const filtersApiSlice = createSlice({
  name: 'filtersApi',
  initialState,
  reducers: {
    changeAllFilters(state, action) {
      return action.payload;
    },
    pageUp(state) {
      state.page++;
    },
    pageDown(state) {
      state.page--;
    },
    pageFirst(state) {
      state.page = 1;
    },
  },
});

export const { changeAllFilters, pageUp, pageDown, pageFirst } = filtersApiSlice.actions;
export default filtersApiSlice.reducer;
