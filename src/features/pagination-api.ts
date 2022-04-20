import { createSlice } from '@reduxjs/toolkit';

const initialState = { page: 0 };

const paginationApiSlice = createSlice({
  name: 'paginationApi',
  initialState,
  reducers: {
    pageUp(state) {
      state.page++;
    },
    pageDown(state) {
      state.page--;
    },
  },
});

export const { pageUp, pageDown } = paginationApiSlice.actions;
export default paginationApiSlice.reducer;
