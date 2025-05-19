import express from 'express'



const app = express()

app.get('/', (req, res) => {
    console.log('Hi Susie!')
    res.send('hellow mother fucker')
})

// Router defination
import mainRoute from './routers/index.router.js'

app.use('/api', mainRoute)


//  custom error handlers
app.use((error, req, res, next) => {
    if(error) {
        res.send(error)
        console.error(error)
      //  console.log(res.x)
    }
        console.log('lol')
})


export default app;