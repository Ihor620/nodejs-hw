import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    // eslint-disable-next-line no-console
    console.log('✅ MongoDB connection established successfully');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};
