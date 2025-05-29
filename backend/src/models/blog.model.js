import mongoose, { Schema } from 'mongoose';
import validator from 'validator'; 

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                return validator.isLength(value, { max: 65 });
            },
            message: 'Title must be under 65 characters!'
        }
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    genra: {
        type: String,
        enum: ['', 'programming', 'anime', 'manga', 'movies', 'japanese', 'drawing'],
        lowercase: true,
        default: ''
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    bookMark: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, { timestamps: true }); 

export const Blog = mongoose.model('Blog', blogSchema);
