import { AppThunk, Dispatch } from '../types';
import { fetchUserInfo, userLogOut } from '../../api/user';
import {
  getUserInfoFulfilled,
  getUserInfoPending,
  getUserInfoRejected,
} from '../reducers/userInfoReducer';

export const getUserInfo =
  (): AppThunk =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(getUserInfoPending());
      const user = await fetchUserInfo();
      dispatch(getUserInfoFulfilled(user));
    } catch (err: unknown) {
      // TO DO
      dispatch(getUserInfoRejected(''));
    }
  };

export const getUserLogOut =
  (): AppThunk =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      // TO DO
      // dispatch(getUserInfoPending());
      const res = await userLogOut();
      // dispatch(getUserInfoFulfilled(user));
    } catch (err: unknown) {
      // TO DO
      // dispatch(getUserInfoRejected(''));
    }
  };
