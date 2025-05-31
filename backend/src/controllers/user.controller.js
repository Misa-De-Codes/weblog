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
    try {
        await User.findByIdAndUpdate(
            { _id: req.user._id },
            {
                $set: { RefreshToken: "" }
            }, {
            runValidators: false
        })
        const options = {
            httpOnly: process.env.HTTPONLY === 'true',
            secure: process.env.SECURE === 'true',
        }
        res.status(202)
        res.clearCookie("AccessToken", options)
        res.clearCookie("RefreshToken", options)
            .json(new APIResponse(202, 'User logout successfully.'))

    } catch (error) {
        throw new APIError(404, `${error}`)
    }
}

const updateUser = async (req, res) => {
    try {
        const usernameId = req.params?.username
        const { fullName, email, username, bio = '', tags = '' } = req.body || {}
        if (!username || username.trim() === '') return res.status(404)
            .json(new APIResponse(404, "Params are missing!"))

        const changes = {}
        if (fullName) changes.fullName = fullName
        if (email) changes.email = email
        if (username) changes.username = username
        if (bio) changes.bio = bio
        if (tags) changes.tags = tags

        const user = await User.findOneAndUpdate(
            { username: usernameId },
            {
                $set: changes
            },
            { new: true, runValidators: true }
        ).select('-refreshToken -password -__v').lean()

        if (!user) return res.status(404)
            .json(new APIResponse(404, "User doesn't exists."))

        return res.status(200)
            .json(new APIResponse(200, 'User updated successfully.', user))

    } catch (error) {
        return res.status(404)
            .json(new APIResponse(404, `${error}`))
    }
}

const getAUser = async (req, res) => {
    try {
        const username = req.params?.username
        if (!username || username.trim() === '') return res.status(404)
            .json(new APIResponse(404, "Params are missing!"))

        const user = await User.findOne({ username }).select('-refreshToken -password -__v').lean()

        if (!user) return res.status(404)
            .json(new APIResponse(404, "User doesn't exists."))

        return res.status(200)
            .json(new APIResponse(200, 'User found successfully.', user))

    } catch (error) {
        return res.status(404)
            .json(new APIResponse(404, `${error}`))
    }
}



export { signup, login, logout, getAUser, updateUser }