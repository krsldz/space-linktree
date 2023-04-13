import { useDispatch as originalUseDispatch } from 'react-redux';
import { ThunkDispatch as ThunkDispatchRedux } from '@reduxjs/toolkit';
import { RootState } from './types';

export type ThunkDispatch = ThunkDispatchRedux<RootState, unknown, any>;

export const useDispatch = () => originalUseDispatch<ThunkDispatch>();
