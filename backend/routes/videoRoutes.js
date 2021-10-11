import express from 'express'
import Video from '../models/videoModel.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()

// route GET api/videos
// desc  Fetch all videos
// acc   Public
router.get('/', asyncHandler(async (req, res) => {
    const videos = await Video.find({})
    res.send(videos)
}))

// route GET api/videos/:id
// desc  Fetch single video
// acc   Public
router.get('/:id', asyncHandler(async (req, res) => {
    const video = await Video.findById(req.params.id)
    if (video) {
        res.send(video)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
}))

export default router