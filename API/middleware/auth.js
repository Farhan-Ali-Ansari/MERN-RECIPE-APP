import {User} from "../Models/User.js";
import jwt from 'jsonwebtoken';

export const Autthenticate = async (req, res, next) =>{
    const token = req.header ("Auth")
    try {
        if(!token) return res.json({message:"Login First Please"})

        const decode = jwt.verify(token,"!@#$%^&*()_+~");

       // console.log("This one is Decoded Data..!",decode)

       const id = decode.userid

       let user = await User.findById(id)
       if (!user)  return res.json({message:"User is not Existed...!"})

        req.user = user
        next();
    } catch (error) {
        res.json({message:error})
    }
}