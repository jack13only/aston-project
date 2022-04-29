import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../features/ls-load-save';

interface AuthState {
  isAuthenticated: boolean;
  user: IUser;
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: {
    name: '',
    lsName: '',
    favourites: [],
    history: [],
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = {
        name: '',
        lsName: '',
        favourites: [],
        history: [],
      };
    },
    addFavourite(state, action) {
      state.user.favourites.push(action.payload);
    },
    removeFavourite(state, action) {
      state.user.favourites = state.user.favourites.filter((item) => item !== action.payload);
    },
    addHistory(state, action) {
      state.user.history.push(action.payload);
    },
    removeHistory(state) {
      state.user.history = [];
    },
  },
});

export const { login, logout, addFavourite, removeFavourite, addHistory, removeHistory } =
  authSlice.actions;
export default authSlice.reducer;
