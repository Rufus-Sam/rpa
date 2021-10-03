import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Video = ({ video }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/video/${video._id}`}>
                <Card.Img src={video.thumbnail} variant='top'></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/video/${video._id}`}>
                    <Card.Title as='div'><strong>{video.name}</strong></Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className='my-3'>{video.date}</div>
                </Card.Text>
                <Link to={`${video.link}`} >
                    <div className='my-3'>Go to video</div>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default Video
