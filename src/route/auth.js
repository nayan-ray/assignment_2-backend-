//importing express
import express from "express";
import * as authController from "../controller/authController.js";

//creating auth route
const authRoute = express.Router();

//creating auth api
authRoute.post("/signup", authController.signup);
authRoute.post("/login", authController.login);    

//exporting auth route
export default authRoute;