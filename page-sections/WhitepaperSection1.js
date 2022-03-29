import WhitepaperTile from "../components/WhitepaperTile";
import styles from "../styles/WhitePaper/WhitepaperSection1.module.css";
import {Container, Row, Col} from 'react-bootstrap';






const WhitepaperSection1 = () => {
  function showpdf(directory){
    if (typeof window !== "undefined") {
      // browser code
      window.open(directory)
    }
  }

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
            <Col onClick={() => {showpdf('/Whitepaper.pdf');}} className={styles.col}>
              <WhitepaperTile
                image_link={"/Sampling.png"}
                h1="GreenVault - The Gold Standard of Crypto"
                body="The paper outlining the architecture of the GreenVault’s solution and the various features and technical expertise that make it unique."
              />
            </Col>
            <Col onClick={() => {showpdf('/CONSERVATION_IMPACT.pdf');}} className={styles.col}>
              <WhitepaperTile
                image_link={"/ConservationDocPhoto.png"}
                h1="Conservation Impact Summary"
                body="This paper gives a brief summary of the environmental impacts GreenVault will prevent. "
              />
            </Col>
            <Col onClick={() => {showpdf('/GreenGold.pdf');}} className={styles.col}>
              <WhitepaperTile
                image_link={"/WesternAus.png"}
                h1="Green Gold - A new gold mining perspective"
                body="An academic paper outlining the necessity of GreenVault’s ORE token, the token's underlying value as an investment,
                and the current market that GreenVault is looking to disrupt."
              />

            </Col>
          </Row>
        </Container>
      </>
    );
}
 
export default WhitepaperSection1;