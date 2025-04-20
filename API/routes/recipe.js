import express from "express";
import {add , getALLRecipe, getRecipeById, getRecipeByUserId, getSavedRecipe, savedRecipeById} from '../controllers/recipe.js';
import { Autthenticate } from "../middleware/auth.js";

const router= express.Router();

//create recipe
router.post('/add',Autthenticate, add)

//get all the recipes
router.get('/',getALLRecipe)

// get all recipe which are saved
router.get('/saved',getSavedRecipe)

//get recipe by ID
router.get('/:id',getRecipeById)

//get recipe by userId
router.get('/user/:id', getRecipeByUserId)

//save recipe by ID
router.post('/:id',Autthenticate ,savedRecipeById)



export default router;