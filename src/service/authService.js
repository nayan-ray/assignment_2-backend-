import { jwt_secret } from "../config/secret.js";
import { generateToken } from "../helper/token.js";
import User from "../model/users.js";
import bcrypt from "bcryptjs";
//signup service
export const signupService = async (req) => {
  try {
    const { firstName, lastName, NIDNumber, phoneNumber, password, bloodGroup } = req.body;
    const user = await User.findOne({ NIDNumber });
    if (user) {
      throw new Error("User already exists");
    }
    const newUser = await User.create({ firstName, lastName, NIDNumber, phoneNumber, password, bloodGroup });
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

//login service
export const loginService = async (req, res) => {
  try {
    const { NIDNumber, password } = req.body;
    const user = await User.findOne({ NIDNumber });
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid password or NID number");
    }
    //create payload
    const payload = {
      id: user._id,
      NIDNumber: user.NIDNumber, 
    };
    //generate token
    const token = generateToken(payload, jwt_secret, "5h");
    //set token in cookie
    res.cookie("accessToken", token, { httpOnly: true, secure: true, maxAge: 5 * 60 * 1000 });
    return token;

  } catch (error) {
    throw new Error(error);
  }
};
