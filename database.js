import mongoose from "mongoose";

mongoose.set('strictQuery', true);
export const connectDB = async () => {
    //const url = `mongodb://localhost:27017/monsters`;
    try {
        const connection = await mongoose.connect('mongodb+srv://ohtani:7fCfjEBEuKmRZ9eG@cluster0.29mufef.mongodb.net/?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (e) {
        console.log("Failed to connect database:", e);
    }
};