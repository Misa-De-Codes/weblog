import express from 'express'



const app = express()

app.get('/', (req, res) => {
    console.log('Hi Susie!')
    res.send('hellow mother fucker')
})


// Importing Routers
import userRouter from './routers/user.router.js'
import blogRouter from './routers/blog.router.js'



// Routers Definations
app.use('/users', userRouter)
app.use('/blogs', blogRouter)


//  custom error handlers
app.use((error, req, res, next) => {
    if(error) {
        res.send(error)
        console.error(error)
    }
        console.log('lol')
})


export default app;