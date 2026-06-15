import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://foodiehub:987654321@cluster0.s3bzgro.mongodb.net/food-del').then(()=> console.log("DB Connected"));
}