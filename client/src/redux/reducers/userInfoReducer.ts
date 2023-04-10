import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  name: string;
  email: string;
};

export const userInfoInitialState: DefaultState<User> = {
  data: {
    email: '',
    name: '',
  },
  error: null,
  loading: false,
};

export const userInfoSlice = createSlice({
  initialState: userInfoInitialState,
  name: 'user',
  reducers: {
    getUserInfoFulfilled(
      state,
      action: PayloadAction<Partial<User>>
    ): DefaultState<User> {
      return {
        data: { ...state.data, ...action.payload },
        error: null,
        loading: false,
      };
    },
    getUserInfoPending(state): DefaultState<User> {
      return { ...state, error: null, loading: true };
    },
    getUserInfoRejected(state, action: PayloadAction<string>): DefaultState<User> {
      return { ...state, error: action.payload, loading: false };
    },
  },
});

export const { getUserInfoPending, getUserInfoFulfilled, getUserInfoRejected } =
  userInfoSlice.actions;

export default userInfoSlice.reducer;
