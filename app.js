//importing express
import express from "express";
import authRoute from "./src/route/auth.js";
import userRoute from "./src/route/userRoute.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDb } from "./src/config/db.js";
import hpp from "hpp";
import morgan from "morgan";
import helmet from "helmet";

//creating express app
const app = express();

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(hpp());
app.use(morgan("dev"));
app.use(helmet());

//connect to database
connectDb();

//routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

//listening to port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
