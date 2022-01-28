import styles from '../styles/Home.module.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmailBox from '../components/EmailBox';
//  import { ScrollContainer, ScrollPage, Animator, Sticky } from 'react-scroll-motion';


export default function Home() {
  return (
    <>
      <Container className={styles.main_window} fluid>
        <Row className={styles.row0}></Row>
        <Row className={styles.row1}>
          <img className={styles.img} src="/GoldGif.gif" />
        </Row>
        <Row className={styles.row2}>
          <h1 className={styles.title}>
            <strong>GOLD X CRYPTO</strong>
          </h1>
        </Row>
        <Row className={styles.row3}>
          <Col className={styles.col1} xs={12} sm={true}>
            <h2 className={styles.paragraph}>

            Digitizing <strong>conservation</strong> rights of unmined <strong>gold</strong>. Conservation is <strong>profitable</strong>. {" "}
            </h2>
          </Col>
          <Col className={styles.col2} xs={12} sm={true}>
            <p className={styles.paragraph}>
              Monetize your gold reserves in a fraction of the time, at a
              fraction of the cost. Learn how the GreenVault is democratizing
              access to gold-backed reserves.
            </p>
          </Col>
          <EmailBox/> 
        </Row>
      </Container>
    </>
  );
}
