import { ProfileData } from '../../redux/reducers/profileDataReducer';

export type ProfileFormData = Omit<ProfileData, 'id'>;
