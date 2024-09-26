
import mongoose from "mongoose";

export const connectDB = async () => {
      
    try{
        await mongoose.connect(process.env.DB);
        console.log("The Database is connected successfully");
    }
    catch(error){
        console.log("There is some error in the connection with the Database", error);
    }
}