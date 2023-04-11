import mongoose from "mongoose";
import { MONGO_URI } from '../utils/secret';

export const connectToDB = () => {
  mongoose.connect(MONGO_URI).catch(err => console.log(err));
  console.log('Connect to DB');
}

export const disconnectToDB = () => {
  mongoose.disconnect()
};
