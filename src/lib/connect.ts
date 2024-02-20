import mongoose from "mongoose";

export async function connectToDB() {
  try {
    if (process.env.MONGODB_URL) {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Connected to Database Successfully");
    }
  } catch (error) {
    console.log("Error while connecting to database:", error);
  }
}
