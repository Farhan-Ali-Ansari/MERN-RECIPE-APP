import {User} from '../Models/User.js'
import bcrypt from 'bcryptjs'
import { request } from 'express'
import jwt from 'jsonwebtoken'


export const register = async (req,res)=>{
    const {name,gmail,password} = req.body
    
    
    try{
        let user = await User.findOne({gmail})

        if (user) return res.json({messsage:"User Already Registered"});
        
        const hashPass = await bcrypt.hash(password,10)

        user = await User.create({name,gmail,password:hashPass})


        res.json({message: "User Registered Successfully ..!",user})
    
    }
        catch(error){
        res.json({message:error})
        }
    

}

export const login = async (req,res) => {
    const {gmail,password} = req.body 
    try{
        let user = await User.findOne ({gmail});

        if(!user) return res.json({message:"User Not Existed"})

        const validPass = await bcrypt.compare(password,user.password)

        if (!validPass) return res.json({message: "Invalid Password"});
        const token= jwt.sign({userid:user._id},"!@#$%^&*()_+~", {
            expiresIn:'1d'
        }
        )
        res.json({message: `Welcome  ${user.name}`,token})

    } catch(error){
        res.json({message:error.message})

    }
}

export const profile = async (req,res) =>{
    res.json({user: req.user})

}  