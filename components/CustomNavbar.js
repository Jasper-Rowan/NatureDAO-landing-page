import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import styles from '../styles/NavBar.module.css';

function CustomNavbar() {
    return (
        <div>
          <Navbar className={styles.navbar} bg="black" variant="dark" expand="sm">
            <Container className={styles.innerNavBar}>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="/GoldDAO_Ore.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top logo"
                />{" "}
                GreenVault
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/comingsoon">whitepaper </Nav.Link>
                <Nav.Link href="/comingsoon">governance</Nav.Link>
                <Nav.Link href="/comingsoon">audits</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );

}

export default CustomNavbar