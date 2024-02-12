import { ProfileData } from '../../redux/reducers/profileDataReducer';

export type ProfileFormData = Omit<ProfileData, 'id' | 'avatar'>;

export type ProfileDataEdit = ProfileFormData & {
  avatar?: File;
};
