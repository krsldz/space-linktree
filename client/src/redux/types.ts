import { PayloadAction as PayloadActionRedux } from '@reduxjs/toolkit';
import { ThunkAction, Action } from '@reduxjs/toolkit';
import { ThunkDispatch as ThunkDispatchRedux } from '@reduxjs/toolkit';
import { Dispatch as DispatchRedux } from 'redux';
import { store } from './store/configureStore';

export type Dispatch = DispatchRedux;

export type GetState = typeof store.getState;

export type RootState = ReturnType<GetState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type ThunkDispatch = ThunkDispatchRedux<RootState, unknown, any>;

export type PayloadAction<T> = PayloadActionRedux<T>;

export type AxiosBaseQueryError = {
  message: string;
  meta?: unknown;
};
