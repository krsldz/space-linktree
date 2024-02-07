import axios from 'axios';
import { User } from '../redux/reducers/userInfoReducer';

export const fetchUserInfo = async (): Promise<User> => {
  const { data } = await axios.get('http://localhost:8080/user', {
    withCredentials: true,
  });
  return data;
};

export const userLogOut = async (): Promise<string> => {
  const { data } = await axios.get('http://localhost:8080/auth/logout', {
    withCredentials: true,
  });
  return data;
};
