//importing mongoose
import mongoose, { set } from "mongoose";
import bcrypt from 'bcryptjs';

//creating user schema
const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    NIDNumber: {type: Number, required: true, unique: true},
    phoneNumber: {type: Number, required: true, unique: true},
    password: {
        type: String, 
        required: true,
        set: (value) => {
            return bcrypt.hashSync(value, bcrypt.genSaltSync(10));
        }
    },
    bloodGroup: {type: String, required: true},
}, {timestamps: true, versionKey: false});

//creating user model
const User = mongoose.model("User", userSchema);

//exporting user model
export default User;

