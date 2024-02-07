import axios from 'axios';
import { ProfileData } from '../redux/reducers/profileDataReducer';

export const fetchProfileData = async (): Promise<ProfileData> => {
  const { data } = await axios.get('http://localhost:8080/profile', {
    withCredentials: true,
  });
  return data;
};

export const fetchEditProfileData = async (profileData: ProfileData): Promise<string> => {
  const { data } = await axios.put('http://localhost:8080/profile', profileData, {
    withCredentials: true,
  });
  return data;
};
