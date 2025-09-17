import mongoose from "mongoose";
import colors from "colors";

const connectDB =async()=>{
    try{
         await mongoose.connect(process.env.MONGODB_URL)
         console.log("Database connected suceesfully".bgGreen.black)
    }
    catch(error){
      console.log("Connection failed",error);
    }
}

export default connectDB;