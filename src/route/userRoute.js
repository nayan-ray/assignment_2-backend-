//importing express
import express from "express";

//creating user route
const userRoute = express.Router();
//creating user api
import * as userController from "../controller/userController.js";
import { isLoggedIn } from "../middleware/authMiddleware.js";


userRoute.get("/users", isLoggedIn, userController.getUsers);
userRoute.get("/users/:id", isLoggedIn, userController.getUser);
userRoute.put("/users/:id", isLoggedIn, userController.updateUser);
userRoute.delete("/users/:id", isLoggedIn, userController.deleteUser);

//exporting user route
export default userRoute;
