import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import CarouselTile from "../components/CarouselTile";
import { Row } from "react-bootstrap";
import styles from "../styles/HomeSection/HomeSection4.module.css";

const Homesection4 = () => {
    return ( 
        <div className={styles.main}>
            <Row className={styles.row1}> 
                <p className={styles.paragraph}>HOW IT WORKS</p>
                <h1 className={styles.title}>Our cryptocurrency based on blockchain tokenomics</h1>
            </Row>

            <Row className={styles.row2}> 
                <img className={styles.image} src="/HomeSection4 Icons.svg"/> 
            </Row> 
            
            <Row styles={styles.row3}> 
            <Carousel>
                <CarouselItem> 
                    <CarouselTile title="BLOCKCHAIN MODEL" body="Any given blockchain consists of a single chain of discrete blocks of information, arranged chronologically. 
                    In principle this information can be any string of 1s and 0s, meaning it could include emails, contracts, land titles, marriage certificates, or bond trades."/> 
                </CarouselItem>

                <CarouselItem>
                    <CarouselTile title="BLOCKCHAIN MODEL" body="Any given blockchain consists of a single chain of discrete blocks of information, arranged chronologically. 
                    In principle this information can be any string of 1s and 0s, meaning it could include emails, contracts, land titles, marriage certificates, or bond trades."/> 
                </CarouselItem>

                <CarouselItem> 
                    <CarouselTile title="BLOCKCHAIN MODEL" body="Any given blockchain consists of a single chain of discrete blocks of information, arranged chronologically. 
                    In principle this information can be any string of 1s and 0s, meaning it could include emails, contracts, land titles, marriage certificates, or bond trades."/> 
                </CarouselItem>
            </Carousel>
            </Row>
        </div>
    );
}
 
export default Homesection4;