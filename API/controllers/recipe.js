import { Recipe} from '../Models/recipe.js'
import {SavedRecipe} from '../Models/SavedRecipe.js'
export const add = async(req,res)=>{
    const{title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgurl} = req.body;

    try{
        const recipe = await Recipe.create({title,
            ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4
            ,imgurl
        ,user: req.user});
            res.json({message:"Recipe Made Successfully", recipe})
    
        } catch (error) {
        res.json({message:error})
    }
}

export const getALLRecipe = async (req,res)=>{
    const recipe = await Recipe.find();
    res.json({recipe})
}

export const getRecipeById = async (req, res)=>{
    const id = req.params.id

    try{
        let recipe = await Recipe.findById(id) 
        if(!recipe) res.json({message:'recipe not Existed'})
        res.json({message:"Recipe By ID", recipe})
    }
    catch (error){
        res.json({message:error})
    }
}   

export const getRecipeByUserId = async (req,res) => {
    const userId = req.params.id

    try{
        let recipe = await Recipe.find({user:userId}) 
        if(!recipe) res.json({message:'recipe not Existed'})
        res.json({message:"Recipe By User's ID", recipe})
    }
    catch (error){
        res.json({message:error})
    }
}

export const savedRecipeById= async (req,res)=>{
    const id = req.params.id

    let recipe = await SavedRecipe.findOne({recipe:id})
        if (recipe) return res.json({message:"Recipe already Saved in Program"})

            recipe = await SavedRecipe.create({recipe:id })
            res.json({message: "Recipe is Saved. Congrats....!"})
            
    
}

export const getSavedRecipe = async(req,res) =>{
    const recipe = await SavedRecipe.find()

    res.json({recipe})
}