import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ErrorType = {
  errorText: string | null;
};

const initialState: ErrorType = {
  errorText: null,
};

export const errorSlice = createSlice({
  initialState,
  name: 'error',
  reducers: {
    clearError(state): ErrorType {
      return {
        ...state,
        ...initialState,
      };
    },
    setError(state, action: PayloadAction<ErrorType>): ErrorType {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
