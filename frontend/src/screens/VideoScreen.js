import React from 'react'
import videos from '../videos'
const VideoScreen = ({ match }) => {
    const video = videos.find((x) => x._id == match.params.id)

    console.log(video.name)
    return (
        <h1>{video.name}</h1>
    )
}

export default VideoScreen
