import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type PublicLinkType = {
  link: string;
  linkId: number;
};

const initialState: DefaultState<PublicLinkType> = {
  data: {
    link: '',
    linkId: 0,
  },
  error: null,
  loading: false,
};

export const publicLinkSlice = createSlice({
  initialState,
  name: 'publicLink',
  reducers: {
    getPublicLinkSliceFulfilled(
      state,
      action: PayloadAction<Partial<PublicLinkType>>
    ): DefaultState<PublicLinkType> {
      return {
        data: { ...state.data, ...action.payload },
        error: null,
        loading: false,
      };
    },
    getPublicLinkSlicePending(state): DefaultState<PublicLinkType> {
      return { ...state, error: null, loading: true };
    },
    getPublicLinkSliceRejected(
      state,
      action: PayloadAction<string | null>
    ): DefaultState<PublicLinkType> {
      return { ...state, error: action.payload, loading: false };
    },
  },
});

export const {
  getPublicLinkSliceFulfilled,
  getPublicLinkSlicePending,
  getPublicLinkSliceRejected,
} = publicLinkSlice.actions;

export default publicLinkSlice.reducer;
