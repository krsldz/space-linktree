import axios from 'axios';
import { User } from '../redux/reducers/userInfoReducer';

export const fetchUserInfo = async (): Promise<User> => {
  // TO DO
  const { data } = await axios.get('http://localhost:8080/auth/user', {
    withCredentials: true,
  });
  return data;
};
