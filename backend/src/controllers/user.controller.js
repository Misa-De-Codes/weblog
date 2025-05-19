const signup = (req, res)=> {
    res.send("post: signup router")
}

const login = (req, res)=> {
    res.send("post: login router")
    console.log('fucl u')
    console.log(res.x)          // got it why it's was shpeing undefined as the controll sed back to the error handler
}


const logout =  (req, res)=> {
    res.send("post: logout router")
}



export {signup, login, logout}