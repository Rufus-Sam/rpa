import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    link: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Video = mongoose.model('Video', videoSchema)

export default Video