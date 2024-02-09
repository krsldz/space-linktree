import {
  errorReducer,
  profileDataReducer,
  userInfoReducer,
  modalReducer,
  publicLinkReducer,
} from '../reducers';

const rootState = {
  error: errorReducer,
  modal: modalReducer,
  profileData: profileDataReducer,
  publicLink: publicLinkReducer,
  userInfo: userInfoReducer,
};

export default rootState;
