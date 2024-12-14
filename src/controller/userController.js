//importing user controller

import { deleteUserService, getUserService, getUsersService, updateUserService } from "../service/userService.js";

//getUser controller
export const getUser = async (req, res, next) => {
    try {
        const user = await getUserService(req);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  
//getUsers controller
export const getUsers = async (req, res, next) => {
    try {
        const users = await getUsersService(req);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  

//updateUser controller
export const updateUser = async (req, res, next) => {
    try {
        const user = await updateUserService(req);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//deleteUser controller
export const deleteUser = async (req, res, next) => {
    try {
        await deleteUserService(req);
        res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

