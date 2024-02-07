import { AppThunk, Dispatch } from '../types';
import { fetchUserInfo, userLogOut } from '../../api/user';
import {
  getUserInfoFulfilled,
  getUserInfoPending,
  getUserInfoRejected,
} from '../reducers/userInfoReducer';
import { ErrorType, setError } from '../reducers/error';

export const getUserInfo =
  (): AppThunk =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(getUserInfoPending());
      const user = await fetchUserInfo();
      dispatch(getUserInfoFulfilled(user));
    } catch (err: unknown) {
      dispatch(getUserInfoRejected((err as ErrorType).errorText));
      dispatch(setError(err as ErrorType));
    }
  };

export const getUserLogOut =
  (): AppThunk =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      // TO DO
      // dispatch(getUserInfoPending());
      const res = await userLogOut();
      if (res === 'OK') {
        window.location.href = '/';
      }
      // dispatch(getUserInfoFulfilled(user));
    } catch (err: unknown) {
      dispatch(getUserInfoRejected((err as ErrorType).errorText));
      dispatch(setError(err as ErrorType));
    }
  };
