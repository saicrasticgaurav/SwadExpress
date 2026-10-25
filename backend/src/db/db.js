import mongoose from "mongoose"
import  config  from "../config/config.js"

const ConnectDB= async ()=>{
    await mongoose.connect(config.MONGO_URI);
    console.log("database connected sussfully");
};
export default ConnectDB;