import { verifyToken } from "../helper/token.js";
import { jwt_secret } from "../config/secret.js";

//creating isLoggedIn middleware
export const isLoggedIn = async (req, res, next) => {
   try {
    const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = verifyToken(token, jwt_secret);
    req.body.userId = decoded.id;
    req.body.NIDNumber = decoded.NIDNumber;
    
    next();
   } catch (error) {
    res.status(500).json({ message: error.message });
   }
}