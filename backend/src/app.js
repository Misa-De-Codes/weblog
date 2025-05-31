import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors({
    origin: process.env.CORS_ORIGIN ,
    methods: ['GET', 'POST', 'PUT', 'DELETE',],
    credentials: true
}))
app.use(cookieParser())


// Router defination 
import mainRoute from './routers/index.router.js'

app.use('/api/v1', mainRoute)

app.get('/', (req, res) => {
    res.send('hello susie')
})

export default app;