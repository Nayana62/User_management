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
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // .then(() =>
  //   app.listen(process.env.PORT, () =>
  //     console.log(`Listening at ${process.env.PORT}`)
  //   )
  // ).catch((error) => console.log(error));

app.use("/users", UserRoute);
