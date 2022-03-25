import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import styles from '../styles/NavBar.module.css';
import Button from 'react-bootstrap/Button';

function CustomNavbar() {
    return (
        <div>
          <Navbar className={styles.navbar} bg="black" variant="dark" expand="sm">
            <Container fluid className={styles.innerNavBar}>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="/GoldDAO_Ore.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top logo"
                />{" "}
                <strong>Green</strong>Vault
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">about</Nav.Link>
                <Nav.Link href="/whitepaper">whitepaper</Nav.Link>
                <Nav.Link href="/comingsoon">governance</Nav.Link>
                <Nav.Link href="/comingsoon">audits</Nav.Link>
              </Nav>
               {/* <div className={styles.buttonBox}> <Button className={styles.button}> Connect Wallet </Button> </div>  */}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );

}

export default CustomNavbar