import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import fetchRimSlice from '../reducers/control-api';
import { rimApi } from '../repositories/rim-api';
import controlApiSlice from '../reducers/control-api';
import localStorageSlice from '../reducers/locastorage-slice';
import authSlice from '../reducers/auth';
import { localStorageMiddleware } from '../middleware/ls-middleware';

export const store = configureStore({
  reducer: {
    fetchRim: fetchRimSlice,
    [rimApi.reducerPath]: rimApi.reducer,
    controlApi: controlApiSlice,
    localStorageUse: localStorageSlice,
    authStorage: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rimApi.middleware, localStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
