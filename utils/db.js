import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await  mongoose.connect(process.env.MONGO_URI + "/" + process.env.DB_NAME + "?retryWrites=true&w=majority");
        console.log('mongodb connected successfully');
    } 
    catch (error) {
        console.log(error);
        
    }
}
export default connectDB;