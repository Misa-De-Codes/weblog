import app from "./app.js";
import dotenv from "dotenv";
import cors from 'cors';
import db from "./config/db.js";


dotenv.config()
//app.use(cors())







const port = process.env.PORT
db()
app.listen(port, ()=> {
    console.log(`The server is running at ${port} mode on port: ${port}`)
})