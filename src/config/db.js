import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected Successfully!\nConnection String: ${connInstance.connection.host}\nDatabase Name: ${connInstance.connection.name}`);
    } catch (error) {
        console.log(`Error Connecting to MongoDB`, error);
        process.exit(1);
    }
}

export default connectDB;