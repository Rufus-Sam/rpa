import React from 'react'
import { Card } from 'react-bootstrap'

const Video = ({ video }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/video/${video._id}`}>
                <Card.Img src={video.thumbnail} variant='top'></Card.Img>
            </a>
            <Card.Body>
                <a href={`/video/${video._id}`}>
                    <Card.Title as='div'><strong>{video.name}</strong></Card.Title>
                </a>
            </Card.Body>
            <Card.Text as='div'>
                <div className='my-3'>{video.date}</div>
            </Card.Text>
            <a href={`${video.link}`} >
                <div className='my-3'>Go to video</div>
            </a>
        </Card >
    )
}

export default Video
