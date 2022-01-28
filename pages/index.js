import styles from "../styles/Home.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EmailBox from "../components/EmailBox";
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
            <Row>
            <h6 className={styles.mission}>Our mission</h6>
              <h2 className={styles.paragraph}>
                Digitizing{" "}
                <strong className={styles.highlighted}>conservation</strong>{" "}
                rights of unmined{" "}
                <strong className={styles.highlighted}>gold</strong>.
                Conservation is{" "}
                <strong className={styles.highlighted}>profitable</strong>.{" "}
              </h2>
            </Row>
          </Col>
          <Col className={styles.col2} xs={12} sm={true}>
            <p className={styles.paragraph}>
              GreenVault is a new take on the worlds oldest asset class by{" "}
              <strong className={styles.highlighted}>
                tokenizing unmined gold
              </strong>
              . Proof of Work mining has detrimental negative effects on the
              environment however these effects are negligible compared to the
              effects of real world precious metal mining. Currently{" "}
              <strong className={styles.highlighted}>60-80%</strong> of all
              mined gold goes directly into a vault where it sits indefinitely
              transacted solely using TradFi. We propose a more{" "}
              <strong className={styles.highlighted}>
                environmentally friendly
              </strong>{" "}
              vision controlled solely using{" "}
              <strong className={styles.highlighted}>DeFi</strong>. By
              digitizing the conservation rights of this unmined gold and
              selling them, we can create a{" "}
              <strong className={styles.highlighted}>
                profit motive for conservation
              </strong>{" "}
              .
            </p>
          </Col>
          <EmailBox />
        </Row>
      </Container>
    </>
  );
}
