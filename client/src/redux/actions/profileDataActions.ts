import { ProfileData } from '../reducers/profileDataReducer';
import {
  fetchEditProfileData,
  fetchProfileData,
  fetchPublicProfile,
} from '../../api/profileData';
import {
  getProfileDataSliceFulfilled,
  getProfileDataSlicePending,
  getProfileDataSliceRejected,
} from '../reducers/profileDataReducer';
import { AppThunk, Dispatch } from '../types';
import { ErrorType, setError } from '../reducers/error';

export const getProfileData =
  (): AppThunk =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(getProfileDataSlicePending());
      const data = await fetchProfileData();
      dispatch(getProfileDataSliceFulfilled(data));
    } catch (err: unknown) {
      dispatch(getProfileDataSliceRejected((err as ErrorType).errorText));
      dispatch(setError(err as ErrorType));
    }
  };

export const getPublicProfile =
  (link: string): AppThunk =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(getProfileDataSlicePending());
      const data = await fetchPublicProfile(link);
      dispatch(getProfileDataSliceFulfilled(data));
    } catch (err: unknown) {
      dispatch(getProfileDataSliceRejected((err as ErrorType).errorText));
      dispatch(setError(err as ErrorType));
    }
  };

export const editProfileData =
  (profileData: { data: ProfileData; id: number }): AppThunk =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      // dispatch(getProfileDataSlicePending());
      const res = await fetchEditProfileData(profileData);
      // console.log(res);

      // dispatch(getProfileDataSliceFulfilled(res));
    } catch (err: unknown) {
      dispatch(getProfileDataSliceRejected((err as ErrorType).errorText));
      dispatch(setError(err as ErrorType));
    }
  };
