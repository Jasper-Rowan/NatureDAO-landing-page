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
                h1="GreenVault - The Gold Standard of Crypto"
                body="The paper outlining the architecture of the GreenVault solution and the various features that make it unique."
              />
            </Col>
            <Col className={styles.col}>
              <WhitepaperTile
                image_link={"/BlueIcon.svg"}
                h1="GreenVault - The Gold Standard of Crypto"
                body="The paper outlining the architecture of the GreenVault solution and the various features that make it unique."
              />
            </Col>
          </Row>
        </Container>
      </>
    );
}
 
export default WhitepaperSection1;