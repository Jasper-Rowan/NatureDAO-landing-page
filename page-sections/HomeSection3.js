import { Container, Row, Col } from "react-bootstrap";
import Tile from "../components/Tile";
import styles from "../styles/HomeSection/HomeSection3.module.css";


const HomeSection3 = () => {
    return ( 
        <Container className={styles.main_window}>
            <Row className={styles.row1}> 
                <div> -------- Why Choose GreenVault </div> 
            </Row>

            <Row className={styles.row2}>
                <Col> 
                    <Tile> 
                        
                    </Tile> 
                </Col> 
                <Col> 
                    <Tile> 
                        
                    </Tile> 
                </Col> 
                <Col> 
                    <Tile> 
                        
                    </Tile> 
                </Col> 
                <Col> 
                    <Tile> 
                        
                    </Tile> 
                </Col> 
            </Row> 
        </Container>
     );
}
 
export default HomeSection3;