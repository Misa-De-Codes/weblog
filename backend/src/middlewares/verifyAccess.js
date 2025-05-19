import verifyRefresh from "./verifyRefresh.js"

export default ( req, res, next) => {
    
    verifyRefresh()
    const x = 'Access Token verify middleware!!!'
    console.log(x)
    res.x = x
    next()
}