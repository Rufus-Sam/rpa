import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Image, ListGroup } from 'react-bootstrap'
import axios from 'axios'
const VideoScreen = ({ match }) => {
    const [video, setVideo] = useState({})

    useEffect(() => {
        const fetchVideo = async () => {
            const { data } = await axios.get(`/api/videos/${match.params.id}`)

            setVideo(data)
        }
        fetchVideo()
    }, [match])
    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            <Row>
                <Col md={6} >
                    <Image src={video.thumbnail} alt={video.name} fluid />
                </Col>
                <Col md={6} >
                    <Row>
                        <ListGroup>
                            <ListGroup.Item>
                                <div className="d-grid gap-2">
                                    <Button variant="secondary" size="lg" >Join us in worshipping the Lord</Button>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p className='y-3'>
                                    This is a {video.tag} published on<strong> {video.date}</strong>.
                                </p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Row>
                    <Row>

                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default VideoScreen
