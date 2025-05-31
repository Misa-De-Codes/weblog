import env from "./config/env.js";
import app from "./app.js";
import connectDB from "./config/db.js";

const port = env.PORT || 8000

app.listen(port, async() => {
    try {
        await connectDB()
        console.log(`Server is running on http://localhost:${port}`)
    } catch (error) {
        console.log(`Server initialization failed: \nError: ${error.message}`)
        process.exit(1)
    }
})