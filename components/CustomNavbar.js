import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'next/image'

function CustomNavbar() {
    return (
        <>
          <Navbar className="navBar" bg="dark" variant="dark" expand="sm">
            <Container className="innerNavbarContainer">
              <Navbar.Brand href="/">
                <Image
                  alt=""
                  src="/Gold Ore.png"
                  width={30}
                  height={30}
                  className="d-inline-block align-top"
                />{" "}
                NatureDAO
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/comingsoon">whitepaper</Nav.Link>
                <Nav.Link href="/comingsoon">governance</Nav.Link>
                <Nav.Link href="/comingsoon">audits</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    );

}

export default CustomNavbar