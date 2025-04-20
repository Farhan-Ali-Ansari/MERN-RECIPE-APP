import express from "express";
import mongoose from "mongoose";
import userRouter from './routes/User.js'
import bodyParser from "express";
import recipeRouter from './routes/recipe.js'
const app = express();

app.use(bodyParser.json())

// userRouter
app.use('/api', userRouter)

//recipeRouter
app.use('/api', recipeRouter)

mongoose.connect("mongodb+srv://farhanafzal2016:wO8uEQxw6hYLh610@cluster0.zhq1k9r.mongodb.net/" , 
    {dbName: "MERN_RECIPE_APP", }
).then(()=>console.log("MongoDB is Successfully Connected..! ")).catch((err)=>console.log(err.message));


const port = 3000;
app.listen(port,()=>console.log(`server is running on port ${port}`))