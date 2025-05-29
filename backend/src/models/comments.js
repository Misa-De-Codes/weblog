import mongoose, { Schema } from 'mongoose';
import validator from 'validator'; 

const commentSchema = new Schema({
    body: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                return validator.isLength(value, { max: 65 });
            },
            message: 'Comment must be under 65 characters!' 
        }
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, { timestamps: true, autoIndex: false });

export const Comment = mongoose.model('Comment', commentSchema);
