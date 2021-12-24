import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const db = {
    connect: async () =>{
        try {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('db connection')
        } catch (err) {
            console.log(err);
        }
    }
}
 export default db