import { createSlice } from '@reduxjs/toolkit';
import { loadNamesFromLS } from '../features/ls-load-save';

const registeredNames = loadNamesFromLS();
const initialState: Array<string> = registeredNames;

const localStorageSlice = createSlice({
  name: 'localStorageRegisteredNames',
  initialState,
  reducers: {
    setName(state, action) {
      state.push(action.payload.toLowerCase());
    },
    loadNames(state, action) {
      return action.payload;
    },
  },
});

export const { setName, loadNames } = localStorageSlice.actions;
export default localStorageSlice.reducer;
