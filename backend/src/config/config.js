import dotenv from "dotenv";
dotenv.config();
if(!process.env.MONGO_URI){
    console.loga("MONO_URI is not defined in environment variable")
}
if(!process.env.JWT_SECRET){
    console.log("JWT_SECRET is not defined in environment variable")
}
if(!process.env.PORT){
    console.log("PORT is not defined in environment variable")
}

const config = {
    PORT:process.env.PORT || 8000,
    MONGO_URI:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET,
};
export default config;