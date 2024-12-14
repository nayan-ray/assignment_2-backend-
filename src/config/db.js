import mongoose from 'mongoose';
import { atlas_url } from './secret.js';



export const connectDb = async ()=>{
   try {
    
    await  mongoose.connect(atlas_url)
    console.log("database connected successfully");
   
   } catch (error) {
      console.log(error.message);
      
   }


}
