import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/userRoute.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to Mongodb");
}).catch((err)=>{
    console.log(err);
})
const app=express();

app.use("/api/user",router)

app.listen(3000,()=>{
    console.log("Server listening on PORT 3000");
})