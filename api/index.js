import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { connectDB } from "../config/db.js";
import userRouter from "../routes/userRoute.js";
import foodRouter from "../routes/foodRoute.js";
import cartRouter from "../routes/cartRoute.js";
import orderRouter from "../routes/orderRoute.js";
import 'dotenv/config';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// Routes
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/images", express.static("uploads"));

app.get("/api", (req, res) => {
  res.send("API Working from Vercel!");
});

export const handler = serverless(app);
