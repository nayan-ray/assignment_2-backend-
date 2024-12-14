//importing jsonwebtoken
import jwt from "jsonwebtoken";

//creating token
export const generateToken = (payload, secretKey, expiresIn) => {
  try {
    return jwt.sign(payload, secretKey, { expiresIn });
  } catch (error) {
    throw new Error(error);                     
  }
};

//verifying token
export const verifyToken = (token, secretKey) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    throw new Error(error);
  }
};

//exporting token

