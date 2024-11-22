import mongoose from 'mongoose';
import { Database_Name } from '../constants';

export const ConnectDB = async() =>{
    try{
        const dbConnection = await mongoose.createConnection(`${process.env.CONNECTION_URL}/${Database_Name}`)
        console.log(`Connected to MongoDB DB host: ${dbConnection.connection.host}`);
    }
    catch(err){
        console.error(err);
    }
}