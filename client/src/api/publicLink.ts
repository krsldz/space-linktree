import axios from 'axios';
import { PublicLinkType } from '../redux/reducers/publicLink';

export const fetchPublicLink = async (): Promise<PublicLinkType> => {
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
