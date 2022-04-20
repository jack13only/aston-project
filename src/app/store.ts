import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import fetchRimSlice from '../features/control-api';
import { rimApi } from '../repositories/rim-api';
import controlApiSlice from '../features/control-api';
import paginationApiSlice from '../features/pagination-api';

export const store = configureStore({
  reducer: {
    fetchRim: fetchRimSlice,
    [rimApi.reducerPath]: rimApi.reducer,
    controlApi: controlApiSlice,
    paginationApi: paginationApiSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rimApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
