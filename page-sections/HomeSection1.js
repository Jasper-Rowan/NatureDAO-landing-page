import {Container, Row, Col, Button} from "react-bootstrap";
import CountDownClock from "../components/CountDownClock";
import CustomProgressBar from "../components/CustomProgressBar";
import styles from "../styles/HomeSection/HomeSection1.module.css"
import Image from 'next/image'

const HomeSection1 = () => {
    
    
      return (
        <>
          <Container className={styles.container} fluid>
            <Row className={styles.row}>
              <Col xl={8} xs={12} className={styles.left_col}>
                <div className={styles.group1}>
                  <h1 className={styles.h1}>
                    The{" "}
                    <span style={{ color: "rgba(135,205,155)" }}>
                      Sustainable
                    </span>{" "}
                    Cryptocurrency backed by{" "}
                    <span style={{ color: "rgba(224,199,90)" }}>
                      Gold Conservation
                    </span>
                  </h1>
                  <p className={styles.p}>
                    The <strong>$500 billion</strong> industry of impact
                    investors has only one way to gain exposure to the{" "}
                    <strong>$10 trillion</strong> gold market: {" "}
                    <strong>GreenVault ORE</strong>. The first carbon-negative
                    currency backed by the conservation of gold mines.
                    GreenVault aims to overtake gold ETFs as the premier vehicle
                    to trade gold.
                  </p>
                  <Button className={styles.joinButton} href="#bottom">
                    Join the GreenVault Revolution
                  </Button>
                </div>
                <div className={styles.progressBar}>
                  <CustomProgressBar bgcolor="#3772FF" completed={35} />
                </div>
              </Col>
              <Col xl={true} xs={12} className={styles.right_col}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.img}
                    src="/GoldGif.gif"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className={styles.clockContainer}>
                  <CountDownClock />
                </div>
              </Col>
            </Row>
          </Container>
        </>
      );
}
 
export default HomeSection1;