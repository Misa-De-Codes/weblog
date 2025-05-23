import express, { Router } from 'express'

const app = express.Router()

// Importing Routers
import userRouter from './user.router.js'
import blogRouter from './blog.router.js'
import commentRouter from './comment.router.js'

// Routers Definations
app.use('/users', userRouter)
app.use('/blogs', blogRouter)
app.use('/comments', commentRouter)

export default app;