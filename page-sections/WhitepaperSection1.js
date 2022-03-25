import WhitepaperTile from "../components/WhitepaperTile";
import styles from "../styles/WhitePaper/WhitepaperSection1.module.css";
import {Container, Row, Col} from 'react-bootstrap';

const WhitepaperSection1 = () => {
    return (
      <>
        <Container fluid className={styles.container}>
          <Row className={styles.topRow}>
            <h1 className={styles.h1}>Whitepapers</h1>
            <p className={styles.p}>
              Download a whitepaper and learn more about the GreenVault ICO
              Token, our unique approach to sustainability and the
              team/advisors.
            </p>
          </Row>
          <Row className={styles.bottomRow}>
            <Col className={styles.col}>
              <WhitepaperTile
                image_link={"/BlueIcon.svg"}
                h1="GreenVault - The Gold Standard of Crypto"
                body="The paper outlining the architecture of the GreenVault solution and the various features that make it unique."
              />
            </Col>
            <Col className={styles.col}>
              <WhitepaperTile
                image_link={"/BlueIcon.svg"}
                h1="Conservation Impact Summary"
                body="The paper aims to capture and quantify the global impact of conservation through the GreenVault ORE Token."
              />
            </Col>
            <Col className={styles.col}>
              <WhitepaperTile
                image_link={"/BlueIcon.svg"}
                h1="Green Gold - A new gold mining perspective"
                body="The paper aims to capture and quantify the global impact of conservation through the GreenVault ORE Token."
              />
            </Col>
          </Row>
        </Container>
      </>
    );
}
 
export default WhitepaperSection1;