import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import UserRoute from "./Routes/userRoute.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(
  {
    origin: [https://user-management-frontend-tau.vercel.app],
    methods: ["POST", "GET"],
    credentials: true
  }
));
dotenv.config();

mongoose
  .connect(mongodb+srv://nmnayana62:HWLnWrGsCtQUBkCj@cluster0.6gcu7g8.mongodb.net/User_Management?retryWrites=true&w=majority, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  

app.use("/users", UserRoute);
