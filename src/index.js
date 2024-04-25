//require('dotenv').config({path:'./env'}); 
import dotenv from 'dotenv';
import express from "express";
const app = express();
import connectDB from "./db/db.js";

dotenv.config({
    path:"../env"
})

connectDB();













/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("ERROR: ", error);
      throw error;
    });
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
