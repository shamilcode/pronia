import mongoose from "mongoose";
import Dotenv from "dotenv";
Dotenv.config();

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI);
        console.log(connection.host);
    } catch (err) {
        console.log(err);
    }
}