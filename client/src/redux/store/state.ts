import { errorReducer, profileDataReducer, userInfoReducer } from '../reducers';

const rootState = {
  error: errorReducer,
  profileData: profileDataReducer,
  userInfo: userInfoReducer,
};

export default rootState;
