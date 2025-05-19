import rotateToken from "./rotateToken.js"

export default (req, res, next) => {
    rotateToken()
    console.log("refresh token check")
    const r = 1
    res.r = r
    next()
}