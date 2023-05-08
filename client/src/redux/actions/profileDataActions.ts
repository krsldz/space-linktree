import { ProfileData } from '../reducers/profileDataReducer';
import { fetchEditProfileData, fetchProfileData } from '../../api/profileData';
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

export const editProfileData =
  (data: ProfileData): AppThunk =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      // dispatch(getProfileDataSlicePending());
      const res = await fetchEditProfileData(data);
      // dispatch(getProfileDataSliceFulfilled(data));
    } catch (err: unknown) {
      dispatch(getProfileDataSliceRejected((err as ErrorType).errorText));
      dispatch(setError(err as ErrorType));
    }
  };
