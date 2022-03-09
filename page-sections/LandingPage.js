import styles from "../styles/LandingPage.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EmailBox from "../components/EmailBox";

const LandingPage = () => {
  return (
    <Container className={styles.main_window} fluid>
      <Row className={styles.row0}></Row>
      <Row className={styles.row1}>
        <img className={styles.img} src="/GoldGif.gif" />
      </Row>
      <Row className={styles.row2}>
        <h1 className={styles.title}>
          <strong>
            GOLD <span className={styles.X}>X</span> CRYPTO
          </strong>
        </h1>
      </Row>
      <Row className={styles.row3}>
        <Col className={styles.col1} xs={12} xl={true}>
          <h6 className={styles.mission}>Our mission</h6>

          <h2 className={styles.paragraph}>
            By digitizing the{" "}
            <strong className={styles.highlighted}>conservation</strong> rights
            of unmined <strong className={styles.highlighted}>gold</strong> we
            are making environmental preservation{" "}
            <strong className={styles.highlighted}>profitable</strong>.{" "}
          </h2>
        </Col>
        <Col className={styles.col2} xs={12} xl={true}>
          <p className={styles.paragraph}>
            GreenVault is a new take on the world&apos;s oldest asset class by{" "}
            <strong className={styles.highlighted}>
              tokenizing unmined gold
            </strong>
            . Proof of Work mining has detrimental negative effects on the
            environment however these effects are negligible compared to the
            effects of real world precious metal mining. Currently,{" "}
            <strong className={styles.highlighted}>60-80%</strong> of all mined
            gold goes directly into a vault where it sits indefinitely
            transacted solely using TradFi. We propose a more{" "}
            <strong className={styles.highlighted}>
              environmentally friendly
            </strong>{" "}
            vision controlled solely using{" "}
            <strong className={styles.highlighted}>DeFi</strong>. By digitizing
            the conservation rights of this unmined gold and selling them, we
            can create a{" "}
            <strong className={styles.highlighted}>
              profit motive for conservation
            </strong>
            .
          </p>
        </Col>
        <EmailBox />
      </Row>
    </Container>
  );
};

export default LandingPage;
