import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">RPA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'>
                            <Nav.Link href="/sunday"><i className='fas fa-bible'>
                            </i>Sunday Services</Nav.Link>
                            <Nav.Link href="/sunday"><i className='fas fa-praying-hands'></i>Sister's Prayers</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
