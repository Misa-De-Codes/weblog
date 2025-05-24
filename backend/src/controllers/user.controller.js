import APIError from '../utils/APIError.js'
import APIResponse from '../utils/APIResponse.js'
import { User } from '../models/user.model.js'
import generateTokens from '../utils/generateTokens.js'


const signup = async (req, res) => {
    try {
        const { fullName, username, email, password } = req.body;

        if ([fullName, username, email].some(field => field?.trim() === '')) {
            return res.status(404)
                .json(new APIResponse(404, 'All fields are required!'))
        }

        const userExists = await User.findOne({
            $or: [{ username }, { email }]
        })

        if (userExists) {
            return res.status(404).json(new APIResponse(404, `User already exists!`))
        }

        const user = new User({
            fullName,
            username,
            email,
            password
        })
        await user.save()

        const { accessToken, refreshToken } = await generateTokens(user._id)

        const options = {
            httpOnly: process.env.HTTPONLY === 'true',
            secure: process.env.SECURE === 'true',
        }

        return res.status(200)
            .cookie('AccessToken', accessToken, options)
            .cookie('RefreshToken', refreshToken, options)
            .json(new APIResponse(200, 'User registered successfully.'))
    } catch (error) {
        console.log(error)
        throw new APIError(404, 'User registration failed!')
    }
}

const login = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if ([username, email].some(field => field?.trim() === '')) {
            return res.status(404)
                .json(new APIResponse(404, 'All fields are required!'))
        }

        const userExists = await User.findOne({
            $or: [{ username }, { email }]
        })

        if (!userExists) {
            return res.status(404).json(new APIResponse(404, `User doesn't exists!`))
        }

        const isPassword = await userExists.isPasswordCorrect(password)

        if (!isPassword) {
            return res.status(404).json(new APIResponse(404, `Invalid password!`))
        }

        const { accessToken, refreshToken } = await generateTokens(userExists._id)

        const options = {
            httpOnly: process.env.HTTPONLY === 'true',
            secure: process.env.SECURE === 'true',
        }

        return res.status(200)
            .cookie('AccessToken', accessToken, options)
            .cookie('RefreshToken', refreshToken, options)
            .json(new APIResponse(200, 'User logged in successfully.'))
    } catch (error) {
        throw new APIError(404, 'User login failed!')

    }
}


const logout = async (req, res) => {
    console.log(await req.user)
    res.send("post: logout router")
}

// get user a user
const updateUser = async (req, res, next) => {
    try {
        const username = req.params?.username
        if (!username || username.trim() === '') return res.status(404)
            .json(new APIResponse(404, "Params are missing!"))

        const user = await User.findOneAndUpdate(username).lean()

        if (!user) return res.status(404)
                .json(new APIResponse(404, "User doesn't exists."))

        return res.status(200)
            .json(new APIResponse(200, 'Blog found.', user))

    } catch (error) {
        return res.status(404)
            .json(new APIResponse(404, `${error}`))
    }
}
// find one username by username
const getAUser = async (req, res) => {
    try {
        const username = req.params?.username
        if (!username || username.trim() === '') return res.status(404)
            .json(new APIResponse(404, "Params are missing!"))

        const user = await User.findOne({username}).select('-refreshToken -password -__v').lean()

        if (!user) return res.status(404)
                .json(new APIResponse(404, "User doesn't exists."))

        const userData = {
            user
        }
        
        return res.status(200)
            .json(new APIResponse(200, 'User found successfully.', user))

    } catch (error) {
        return res.status(404)
            .json(new APIResponse(404, `${error}`))
    }
}



export { signup, login, logout, getAUser, updateUser }