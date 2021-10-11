import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDb from './config/db.js'
import videoRoutes from './routes/videoRoutes.js'

dotenv.config()
connectDb()
const app = express()

app.get('/', (req, res) => {
    res.send("Rpa backend working")
})
app.use('/api/videos', videoRoutes)

const PORT = process.env.PORT || 5000
const mode = process.env.NODE_ENV
app.listen(PORT, console.log(`Server running on port ${PORT} in ${mode} mode`.yellow.bold))