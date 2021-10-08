const express = require('express')
const videos = require('./data/videos')
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

app.listen(5000, console.log("Server running on port 5000"))