import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../styles/HomeSection/HomeSection2.module.css";


const HomeSection2 = () => {
    return ( 
        <Container style={{margin: "0"}}>
        <Row className={styles.main_window}>
            <Col className={styles.col1}> 
                <img className={styles.image1} src="/globe.svg"/> 
            </Col>
            <Col className={styles.col2}> 

                <Row className={styles.row1}> 
                    <h1 className={styles.title}>
                        <strong> Making environmental preservation profitable </strong>
                    </h1>
                </Row>
                <Row> 
                    <Col xs={4} className={styles.col3}> 
                        <img className={styles.image2} src="/HomeSection_bullet_icons.svg"/> 
                    </Col> 

                    <Col className={styles.col4}> 
                        <div className={styles.headers}> 
                            <div> 
                                <h3 className={styles.titles2}> 
                                    Decentralized Platform
                                </h3>
                                <div className={styles.p1}>The platform helps investors easily purchase and sell their unmined gold tokens - ORE</div> 
                            </div> 
                            <div> 
                                <h3 className={styles.titles2}> 
                                    Carbon Negative
                                </h3> 
                                <div className={styles.p1}>The process is eco-friendly and we protect the environment for the greater good</div> 
                            </div> 
                            <div> 
                                <h3 className={styles.titles2}> 
                                    Conservatorship
                                </h3>
                                <div className={styles.p1}>Our unique model enables us to secure and protect land all across the globe</div> 
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