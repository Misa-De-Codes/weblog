import mongoose, { Schema } from 'mongoose';

const user = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    bio: {
        type: String,
        trim: true
    },
    

    createdAt: {
        type: Date,
        default: Date.now
    }
},)


export const User = mongoose.model('User', user) 