//importing user model

import { loginService, signupService } from "../service/authService.js";


//signup controller
export const signup = async (req, res, next) => {
  try {
    const signupUser = await signupService(req);
    res.status(201).json(signupUser);
   
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//login controller
export const login = async (req, res, next) => {
  try {
    const loginUser = await loginService(req, res);
    res.status(200).json(loginUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


