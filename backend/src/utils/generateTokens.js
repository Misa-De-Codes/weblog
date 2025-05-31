import APIError from "./APIError.js"
import { User } from "../models/user.model.js"

const generateTokens = async function (userId) {
    try {
        const user = await User.findById(userId)

        const accessToken = user.generateAccessTokens()
        const refreshToken = user.generateRefreshTokens()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {
            accessToken,
            refreshToken
        }
    } catch (error) {
        throw new APIError(500, "Something went wrong while generating tokens!")
    }
}

export default generateTokens;