import express from "express";
import {register, login, profile}  from '../controllers/user.js';
import { Autthenticate } from "../middleware/auth.js";

const router = express.Router();
//user register
router.post('/register', register )
//user login
router.post('/login', login)
//profile
router.get('/user',Autthenticate, profile)

export default router