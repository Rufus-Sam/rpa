import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3' >
                        Copyright &copy; Rehoboth Philadelphia Assembly
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
