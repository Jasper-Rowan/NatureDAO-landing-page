import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import CarouselTile from "../components/CarouselTile";
import { Row, Container } from "react-bootstrap";
import styles from "../styles/HomeSection/HomeSection4.module.css";

const Homesection4 = () => {
    return (
      <Container fuild className={styles.main}>
        <Row className={styles.row1}>
          <p className={styles.paragraph}>HOW IT WORKS</p>
          <h1 className={styles.title}>
            The intersection of <br/> crypto, gold, and nature.
          </h1>
        </Row>

        <Row className={styles.row2}>
          <img className={styles.image} src="/HomeSection4 Icons.svg" />
        </Row>
        <Row className={styles.row3}>
          <Carousel style={{ position: "relative", zIndex: "1" }}>
            <CarouselItem>
              <CarouselTile
                title="BLOCKCHAIN MODEL"
                body="Any given blockchain consists of a single chain of discrete blocks of information, arranged chronologically. 
                    In principle this information can be any string of 1s and 0s, meaning it could include emails, contracts, land titles, marriage certificates, or bond trades."
              />
            </CarouselItem>

            <CarouselItem>
              <CarouselTile
                title="GOLD ETFs"
                body="Exchange-traded funds provide investors exposure to gold by hoarding bullion in bank vaults and issuing securities against them. Unfortunately they make no attempts to mitigate their massive environmental footprint."
              />
            </CarouselItem>

            <CarouselItem>
              <CarouselTile
                title="GREENVAULT"
                body="The ORE token brings verified precious metals on chain before they are mined, offering a carbon-negative alternative to gold ETFs."
              />
            </CarouselItem>
          </Carousel>
        </Row>
      </Container>
    );
}
 
export default Homesection4;