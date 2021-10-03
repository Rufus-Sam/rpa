import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Video from '../components/Video'
import videos from '../videos'
const HomeScreen = () => {

    return (
        <>
            <h1>Latest videos</h1>
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
