import mongoose, { mongo } from 'mongoose';

export default async() => {
    try {
        const mongoURI = process.env.mongoURI;
        
        if(!mongoURI) throw new Error('Unable to load environment variablels!')

        await mongoose.connect(mongoURI)
        console.log('Database connection successfull:', mongoose.connection.host)
        
    } catch (error) {
        console.log('Database connection failed:', error.message)
    }
}