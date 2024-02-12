import axios from 'axios';
import { ProfileData } from '../redux/reducers/profileDataReducer';
import { ProfileDataEdit } from '../components/SettingsPage/types';

export const fetchProfileData = async (): Promise<ProfileData> => {
  const { data } = await axios.get('http://localhost:8080/profile', {
    withCredentials: true,
  });
  return data;
};

export const fetchPublicProfile = async (link: string): Promise<ProfileData> => {
  const { data } = await axios.get(`http://localhost:8080/${link}`, {
    withCredentials: true,
  });
  return data;
};

export const fetchEditProfileData = async (profileData: {
  data: ProfileDataEdit;
  id: number;
}): Promise<{ text: string }> => {
  const { data } = await axios.put('http://localhost:8080/profile', profileData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  });
  return data;
};
