import axios from 'axios';
import { ProfileData } from '../redux/reducers/profileDataReducer';

export const fetchProfileData = async (): Promise<ProfileData> => {
  const { data } = await axios.get('http://localhost:8080/profile/getData', {
    withCredentials: true,
  });
  return data;
};

export const fetchEditProfileData = async (profileData: ProfileData): Promise<string> => {
  const { data } = await axios.post(
    'http://localhost:8080/profile/getData',
    profileData,
    {
      withCredentials: true,
    }
  );
  return data;
};
