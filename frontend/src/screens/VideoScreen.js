import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Image, ListGroup } from 'react-bootstrap'
import { listVideoDetails } from '../actions/videoActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
const VideoScreen = ({ match }) => {
    const dispatch = useDispatch()

    const videoDetails = useSelector(state => state.videoDetails)
    const { loading, error, video } = videoDetails

    useEffect(() => {
        dispatch(listVideoDetails(match.params.id))
    }, [dispatch, match])

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
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
            )}
        </>
    )
}

export default VideoScreen
