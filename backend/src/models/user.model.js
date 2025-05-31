import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt'
import validator from 'validator'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Your name is required!'],
        trim: true
    },
    username: {
        type: String,
        required: [true, 'Username us required!'],
        unique: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: validator.isEmail,
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        trim: true
    },
    refreshToken: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        trim: true,
        default: '',
        validate: {
            validator: (value) => {
                return validator.isLength(value, { max: 250 })
            },
            message: 'Bio must be 250 characters or less!'
        }
    },
    tags: {
        type: String,
        enum: ['', 'software engineer', 'developer', 'teacher', 'student', 'doctor', 'singer', 'artist'],
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},)




userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessTokens = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_KEY,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshTokens = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_KEY,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model('User', userSchema)