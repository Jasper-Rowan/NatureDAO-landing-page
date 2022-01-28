import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import styles from '../styles/ComingSoon.module.css'


export default function ComingSoon() {

    return (
      <>
        <Container className={styles.main_window} fluid>
          <Row className={styles.row0}></Row>
          <Row className={styles.row1}>
            <img className={styles.img} src="/GoldGif.gif" />
          </Row>
          <Row className={styles.row2}>
            <h1 className={styles.text} >
              <strong >COMING SOON</strong>
            </h1>
          </Row>
        </Container>
        <div className="styles.container1"></div>
      </>
    );
}
