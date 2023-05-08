import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProfileData = {
  name: string;
  email: string | null;
  linkedin: string | null;
  github: string | null;
  behance: string | null;
  link: string | null;
  whatsapp: string | null;
  telegram: string | null;
  facebook: string | null;
  instagram: string | null;
  tiktok: string | null;
  spotify: string | null;
  youtube: string | null;
};

export const progileDataInitialState: DefaultState<ProfileData> = {
  data: {
    behance: null,
    email: null,
    facebook: null,
    github: null,
    instagram: null,
    link: null,
    linkedin: null,
    name: '',
    spotify: null,
    telegram: null,
    tiktok: null,
    whatsapp: null,
    youtube: null,
  },
  error: null,
  loading: false,
};

export const profileDataSlice = createSlice({
  initialState: progileDataInitialState,
  name: 'profileData',
  reducers: {
    getProfileDataSliceFulfilled(
      state,
      action: PayloadAction<Partial<ProfileData>>
    ): DefaultState<ProfileData> {
      return {
        data: { ...state.data, ...action.payload },
        error: null,
        loading: false,
      };
    },
    getProfileDataSlicePending(state): DefaultState<ProfileData> {
      return { ...state, error: null, loading: true };
    },
    getProfileDataSliceRejected(
      state,
      action: PayloadAction<string | null>
    ): DefaultState<ProfileData> {
      return { ...state, error: action.payload, loading: false };
    },
  },
});

export const {
  getProfileDataSliceFulfilled,
  getProfileDataSlicePending,
  getProfileDataSliceRejected,
} = profileDataSlice.actions;

export default profileDataSlice.reducer;
