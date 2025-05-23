import mongoose, { Schema } from 'mongoose';
import validator from 'validator'; // y-you need this, remember…!

const commentSchema = new Schema({
    body: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                return validator.isLength(value, { max: 65 });
            },
            message: 'Comment must be under 65 characters!' // f-fixed this message >~<
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
}, { timestamps: true }); // i-it's lowercase… o-of course you knew that! R-right?

export const Comment = mongoose.model('Comment', commentSchema);
