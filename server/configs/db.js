import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(
            `${process.env.MONGODB_URI}/hotel-booking`,
            {
                serverSelectionTimeoutMS: 10000
            }
        );

        console.log("Database Connected:", mongoose.connection.name);
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        throw error;
    }
};

export default connectDB;
