import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE',],
    credentials: true
}))
app.use(cookieParser())


// Router defination 
import mainRoute from './routers/index.router.js'

app.use('/api/v1', mainRoute)

app.get('/', (req, res, next)=> {
    res.send('hellow susie')
})
// Custom universal error handlers
// app.use((err, req, res, next) => {
//     if (err instanceof APIError) {
//         return res.status(err.statusCode).json({
//             status: err.status,
//             success: err.success,
//             message: err.message
//         })
//     }
//     if (err.name === 'JsonWebTokenError') {
//         return res.status(401).json({
//             status: 'fail',
//             success: false,
//             message: 'Invalid token.'
//         });
//     }
//     return res.status(500).json(
//         new APIResponse(500, 'Internal server error.')
//     )
// })


export default app;