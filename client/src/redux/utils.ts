import { useDispatch as originalUseDispatch } from 'react-redux';
import { ThunkDispatch as ThunkDispatchRedux } from '@reduxjs/toolkit';
import {
  useSelector as originalUseSelector,
  TypedUseSelectorHook,
  shallowEqual,
} from 'react-redux';
import type { RootState } from './types';

export type ThunkDispatch = ThunkDispatchRedux<RootState, unknown, any>;

export const useDispatch = () => originalUseDispatch<ThunkDispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = (selector) =>
  originalUseSelector(selector, shallowEqual);
