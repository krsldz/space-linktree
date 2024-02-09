import axios from 'axios';
import { ProfileData } from '../redux/reducers/profileDataReducer';

export const fetchPublicLink = async (): Promise<ProfileData> => {
  const { data } = await axios.get('http://localhost:8080/public', {
    withCredentials: true,
  });
  return data;
};

export const fetchEditPublicLink = async (
  id: number,
  link: string
): Promise<{ text: string }> => {
  const { data } = await axios.put(
    `http://localhost:8080/public/${id}`,
    { link },
    {
      withCredentials: true,
    }
  );
  return data;
};
