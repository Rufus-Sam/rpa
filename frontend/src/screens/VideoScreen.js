import React from 'react'
import videos from '../videos'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Image, OverlayTrigger, Tooltip, ListGroup } from 'react-bootstrap'
const VideoScreen = ({ match }) => {
    const video = videos.find((x) => x._id === match.params.id)

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
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id={`tooltip-top`} >
                                                Watch {video.name}
                                            </Tooltip>
                                        }
                                    >
                                        <Button variant="secondary" size="lg" >Join us in worshipping the Lord</Button>
                                    </OverlayTrigger>
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
