import {Container, Row, Col, Button} from "react-bootstrap";
import CountDownClock from "../components/CountDownClock";
import CustomProgressBar from "../components/CustomProgressBar";
import styles from "../styles/HomeSection1.module.css"
import Image from 'next/image'

const HomeSection1 = () => {
    
    
      return (
      <>
        <Container className={styles.container} fluid>
          <Row className={styles.row}>
            <Col className={styles.left_col}>
              <h1 className={styles.h1}>
                The Worlds First Cryptocurrency backed by Green{" "}
                <span style={{ color: "rgba(209,177,44,255)" }}>Gold</span>
              </h1>
              <p className={styles.p}>
                The first decentralized marketplace that tokenizes unmined gold
                and creates standardized market liquidity through blockchain
                technology. We use conservatorship to secure and protect land
                around the world.
              </p>
              <Button className={styles.joinButton} href="#bottom">
                Join the GreenVault Revolution
              </Button>
              <CustomProgressBar
                bgcolor="#3772FF"
                completed={35}
              />
            </Col>
            <Col className={styles.right_col}>
              <Image
                className={styles.img}
                src="/GoldGif.gif"
                width={1920}
                height={1080}
              />
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