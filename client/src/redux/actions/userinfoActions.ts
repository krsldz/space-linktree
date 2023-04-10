import { AppThunk, Dispatch } from '../types';
// import { fetchUserInfo } from '../../api';
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
      // const user = fetchUserInfo();
      // dispatch(getUserInfoFulfilled(user));
    } catch (err: unknown) {
      // TO DO
      dispatch(getUserInfoRejected(''));
    }
  };
