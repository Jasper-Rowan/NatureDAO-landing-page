import { Container, Row, Col} from "react-bootstrap";
import Image from 'next/image';
import styles from "../styles/HomeSection/HomeSection2.module.css";


const HomeSection2 = () => {
    return (
      <Container fluid style={{ margin: "0" }}>
        <Row className={styles.main_window}>
          <Col className={styles.col1}>
            <Image className={styles.image1} src="/globe.svg" />
          </Col>
          <Col className={styles.col2}>
            <Row className={styles.row1}>
              <h1 className={styles.title}>
                <strong> WHAT IS GREENVAULT? </strong>
              </h1>
            </Row>
            <Row>
              <Col xs={4} className={styles.col3}>
                <Image
                  className={styles.image2}
                  src="/HomeSection_bullet_icons.svg"
                />
              </Col>

              <Col className={styles.col4}>
                <div className={styles.headers}>
                  <div>
                    <h3 className={styles.titles2}>Decentralized Protocol</h3>
                    <div className={styles.p1}>
                      The protocol helps investors easily purchase and sell
                      their unmined gold tokens - ORE
                    </div>
                  </div>
                  <div>
                    <h3 className={styles.titles2}>Gold Conservation</h3>
                    <div className={styles.p1}>
                      Our unique model enables us to secure and protect land in
                      the United States and across the globe.
                    </div>
                  </div>
                  <div>
                    <h3 className={styles.titles2}>Endless Growth</h3>
                    <div className={styles.p1}>
                      With markets this huge, the fun never ends!
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
}
 
export default HomeSection2;