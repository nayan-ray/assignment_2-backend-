//importing user model
import User from "../model/users.js";

//get user service
export const getUsersService = async (req) => {
    try {
        const users = await User.find({}, {password: 0});
        if(!users){
            throw new Error("Users not found");
        }
        return users;
    } catch (error) {
        throw new Error(error);
    }
}  
//get user service
export const getUserService = async (req) => {
    try {
 
        const user = await User.findById(req.params.id, {password: 0});
        if(!user){
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        throw new Error(error);
    }
}
//update user service
export const updateUserService = async (req) => {
    try {
       
        //updating user
       

        const user = await User.findByIdAndUpdate(req.params.id, req.body, {select: "-password"} , { new: true });
        if(!user){
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

//delete user service
export const deleteUserService = async (req) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        throw new Error(error);
    }
}
