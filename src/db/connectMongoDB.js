import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  // eslint-disable-next-line no-console
  console.log('✅ MongoDB connection established successfully');
};
