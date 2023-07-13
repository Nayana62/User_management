import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import UserRoute from "./Routes/userRoute.js";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

mongoose
  .connect("mongodb+srv://nmnayana62:HWLnWrGsCtQUBkCj@cluster0.6gcu7g8.mongodb.net/User_Management?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  

app.use("/users", UserRoute);
