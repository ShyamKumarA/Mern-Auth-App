import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userrouter from './routes/userRoute.js';
import authrouter from './routes/authRoute.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to Mongodb");
}).catch((err)=>{
    console.log(err);
})
const app=express();
app.use(express.json())
app.use("/api/user",userrouter)
app.use("/api/auth",authrouter)

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||'Internal server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})


app.listen(3000,()=>{
    console.log("Server listening on PORT 3000");
})