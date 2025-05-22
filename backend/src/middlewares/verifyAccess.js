import jwt from 'jsonwebtoken'
import { User } from "../models/user.model.js"
import generateTokens from '../utils/generateTokens.js'
import APIResponse from '../utils/APIResponse.js'

export default async (req, res, next) => {
    try {
        const accessToken = req.cookies?.AccessToken
        const refreshToken = req.cookies?.RefreshToken

        if (!accessToken) {
            if (!refreshToken) {
                return res.status(401).json(
                    new APIResponse(401, 'Tokens are missing! Please login.')
                )
            }

            const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY)
            const user = await User.findById(payload._id)

            if (!user) {
                return res.status(404).json(
                    new APIResponse(404, 'User not found! Please login again.')
                )
            }

            if (user.refreshToken !== refreshToken) {
                return res.status(403).json(
                    new APIResponse(403, "Refresh token doesn't match!")
                )
            }
            const { accessToken, refreshToken } = await generateTokens(user._id)

            const options = {
                httpOnly: process.env.HTTPONLY === 'true',
                secure: process.env.SECURE === 'true',
            }
            res.cookie('accessToken', accessToken, options)
            res.cookie('refreshToken', refreshToken, options)
            req.user = user
            return next()
        }

        const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY)
        const user = await User.findById(payload._id)

        if (!user) {
            return res.status(404).json(
                new APIResponse(404, 'User not found! Please login again.')
            )
        }

        req.user = user
        next()
    } catch (error) {
        console.error('Auth Middleware Error:', error)
        return res.status(500).json(
            new APIResponse(500, 'Something went wrong in authentication.')
        )
    }
}
