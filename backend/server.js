import express from 'express'
import dotenv from 'dotenv'
import videos from './data/videos.js'


dotenv.config()
const app = express()

app.get('/', (req, res) => {
    res.send("Rpa backend working")
})
app.get('/api/videos', (req, res) => {
    res.send(videos)
})
app.get('/api/videos/:id', (req, res) => {
    const video = videos.find((x) => x._id === req.params.id)
    res.send(video)
})
const PORT = process.env.PORT || 5000
const mode = process.env.NODE_ENV
app.listen(PORT, console.log(`Server running on port ${PORT} in ${mode} mode`))