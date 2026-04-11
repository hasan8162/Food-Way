import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import "dotenv/config";

/* works when I add this */
import dns from "node:dns/promises";   
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";

dns.setServers(["1.1.1.1", "1.0.0.1"]);

const app = express();
const port = process.env.PORT || 4000;
const allowedOrigins = ["http://localhost:5173"];

await connectDB()
await connectCloudinary()

//Middleware config
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/product', productRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
