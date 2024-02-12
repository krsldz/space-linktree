import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProfileData = {
  name: string;
  email: string;
  avatar: string;
  id: number;
  linkedin: string;
  github: string;
  behance: string;
  link: string;
  whatsapp: string;
  telegram: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  spotify: string;
  youtube: string;
};

export const progileDataInitialState: DefaultState<ProfileData> = {
  data: {
    avatar: '',
    behance: '',
    email: '',
    facebook: '',
    github: '',
    id: 0,
    instagram: '',
    link: '',
    linkedin: '',
    name: '',
    spotify: '',
    telegram: '',
    tiktok: '',
    whatsapp: '',
    youtube: '',
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
