import mongoose, { Schema } from 'mongoose';

const blog = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    genra: {
        type: String,
        enum: ['programming', 'anime', 'manga', 'movies', 'japanese', 'drawing'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

}, {timeStamps: true})


export const Blog = mongoose.model('Blog', blog) 