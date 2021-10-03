import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>RPA</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'>
                            <LinkContainer to='/sunday'>
                                <Nav.Link><i className='fas fa-bible'>
                                </i>Sunday Services</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/sister'>
                                <Nav.Link><i className='fas fa-praying-hands'></i>Sister's Prayers</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav className="ms-auto">
                            <LinkContainer to='/login'>
                                <Nav.Link ><i className='fas fa-user'></i>Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
