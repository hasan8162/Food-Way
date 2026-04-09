import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("✅ Database connected");
    });

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "foodway",
    });

  } catch (error) {
    console.error("❌ DB Connection Error:", error.message);
  }
};

export default connectDB;