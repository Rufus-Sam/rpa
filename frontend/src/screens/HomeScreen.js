import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Video from '../components/Video'
import axios from 'axios'

const HomeScreen = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const fetchVideos = async () => {
            const { data } = await axios.get('/api/videos')
            setVideos(data)
        }
        fetchVideos()
    }, [])
    return (
        <>
            <h1>Our Latest works</h1>
            <Row>
                {videos.map((video) => (
                    <Col key={video._id} sm={12} md={6} lg={4} xl={3}>
                        <Video video={video} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
