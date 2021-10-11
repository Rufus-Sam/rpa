import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Video from '../components/Video'
import { listVideos } from '../actions/videoActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const videoList = useSelector(state => state.videoList)
    const { loading, error, videos } = videoList

    useEffect(() => {
        dispatch(listVideos())
    }, [dispatch])

    return (
        <>
            <h1>Our Latest works</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    {videos.map((video) => (
                        <Col key={video._id} sm={12} md={6} lg={4} xl={3}>
                            <Video video={video} />
                        </Col>
                    ))}
                </Row>
            )}

        </>
    )
}

export default HomeScreen
