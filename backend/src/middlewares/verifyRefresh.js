import rotateToken from "./rotateToken.js"

export default (req, res, next) => {
    rotateToken()
    console.log("refresh token check")
    next()
}