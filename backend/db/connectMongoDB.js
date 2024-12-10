import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectMondoDB = async() => {

    try{

        const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected!!",conn.connection.host);
        
    }catch(err){
        console.log("Error Connecting to MONGODB:\n",err.message)
        process.exit(1);
    }

}

export default connectMondoDB;