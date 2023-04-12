import mongoose from "mongoose";

const Schema = mongoose.Schema;

export type ProfileDataType = {
  name: string;
  email: string | null;
  linkedin: string | null;
  github: string | null;
  behance: string | null;
  link: string | null;
  whatsapp: string | null;
  telegram: string | null;
  facebook: string | null;
  instagram: string | null;
  tiktok: string | null;
  spotify: string | null;
  youtube: string | null;
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: string
  }
};

const profileDataSchema = new Schema<ProfileDataType>({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,
  email: String,
  linkedin: String,
  github: String,
  behance: String,
  link: String,
  whatsapp: String,
  telegram: String,
  facebook: String,
  instagram: String,
  tiktok: String,
  spotify: String,
  youtube: String,
});

const ProfileData = mongoose.model<ProfileDataType>('profile', profileDataSchema);

export default ProfileData;
