import { Container, Row, Col } from "react-bootstrap";
import Tile from "../components/Tile";
import styles from "../styles/HomeSection/HomeSection3.module.css";


const HomeSection3 = () => {
    return ( 
        <Container className={styles.main_window}>
            <Row className={styles.row1}> 
                <div> -------- WHY CHOOSE GREENVAULT </div> 
            </Row>

            <Row className={styles.row2}>
                <Col lg={3} md={6} className={styles.col}> 
                    <Tile image_link={"/BlueIcon.svg"} heading={"Liquidating Unmined Gold"} body={"Unmined gold has never been as valuable as it is right now"}/> 
                        
                </Col> 
                <Col lg={3} md={6} className={styles.col}> 
                    <Tile image_link={"/GreenIcon.svg"} heading={"No transaction fees"} body={"You can buy tokens without paying any transaction fee"}/> 
                </Col> 
                <Col lg={3} md={6} className={styles.col}> 
                    <Tile image_link={"/GrayIcon.svg"} heading={"Protect the environment"} body={"We have the infrastructure in place to protect 1,000,000 acres of land"}/> 
                </Col> 
                <Col lg={3} md={6} className={styles.col}> 
                    <Tile image_link={"/GoldIcon.svg"} heading={"Security & Control"} body={"Provide high levels of security allowing users to keep assets secure"}/>
                </Col> 
            </Row> 
        </Container>
     );
}
 
export default HomeSection3;