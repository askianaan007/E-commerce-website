//packages
import express from "express";
import path, { resolve } from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//utils
import connectDB from "./config/db.js";

//routes
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const port = process.env.PORT || 6000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/user", userRoutes);

app.listen(port, () => console.log(`server running on the port: ${port}`));

