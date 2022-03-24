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
                    <Tile image_link={"/BlueIcon.svg"} heading={"Liquidating Unmined Gold"} body={"Unmined gold has never had a simple investment vechicle until now"}/> 
                        
                </Col> 
                <Col lg={3} md={6} className={styles.col}> 
                    <Tile image_link={"/GreenIcon.svg"} heading={"Low transaction fees"} body={"Using the cutting edge of blockchain technologies we can keep fees low"}/> 
                </Col> 
                <Col lg={3} md={6} className={styles.col}> 
                    <Tile image_link={"/GrayIcon.svg"} heading={"Protect the environment"} body={"We have the infrastructure in place to protect millions of arces of land"}/> 
                </Col> 
                <Col lg={3} md={6} className={styles.col}> 
                    <Tile image_link={"/GoldIcon.svg"} heading={"Security & Control"} body={"Provide high levels of security allowing users to keep assets secure"}/>
                </Col> 
            </Row> 
        </Container>
     );
}
 
export default HomeSection3;