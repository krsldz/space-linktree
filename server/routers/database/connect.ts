import mongoose from "mongoose";

export const connect = () => {
  mongoose.connect(process.env.MONGO || '')
}

export const disconnect = () => {
  mongoose.disconnect()
};
