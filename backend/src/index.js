import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


dotenv.config()

const port = process.env.PORT || 8000

app.listen(port, async() => {
    try {
        await connectDB()
        console.log(`Server is running on http://localhost:${port}`)
    } catch (error) {
        console.log(`Server initialization failed:`)
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
})