import {Row, Col}from "react-bootstrap";
import styles from "../styles/about.module.css";
import AboutProfile from "../components/AboutProfile";

const About = () => {
    return (
        <>
        <div style={{backgroundColor: 'black', height: '300vh', position: 'absolute', zIndex:'0'}}>
        <div className={styles.image1}>
                <img src="backgroundImage.svg"/> 
            </div> 
            <div className={styles.text}>
                <h1 className={styles.header}> About GreenVault </h1> 

                <p className={styles.body}>
    Currently, 60-80% of all mined gold goes directly into a vault where it sits indefinitely transacted solely using TradFi. 
    We propose a more environmentally friendly vision controlled solely using DeFi. 
    By digitizing the conservation rights of this unmined gold and selling them, we can create a profit motive for conservation.
                </p>    
            </div> 

            <div className={styles.fill}> 
                <img src="/HologramPlanet.gif"/>  
            </div> 

            <div className={styles.middle}>
                <h1 className={styles.header2}> Mission </h1> 

                <p className={styles.body2}>
    Currently, 60-80% of all mined gold goes directly into a vault where it sits indefinitely transacted solely using TradFi. 
    We propose a more environmentally friendly vision controlled solely using DeFi. 
    By digitizing the conservation rights of this unmined gold and selling them, we can create a profit motive for conservation.
                </p> 

                <h1 className={styles.header2}> Vision </h1> 

                <p className={styles.body2}>
Currently, 60-80% of all mined gold goes directly into a vault where it sits indefinitely transacted solely using TradFi. 
We propose a more environmentally friendly vision controlled solely using DeFi. 
By digitizing the conservation rights of this unmined gold and selling them, we can create a profit motive for conservation.
                </p>    

                <h1 className={styles.header2}> Team </h1> 

                <Row className={styles.row}> 
                    <Col lg={3} md={6} className={styles.col}> 
                        <AboutProfile ImgSrc={"hannibal.jpeg"} name={"Callam Ingram"} title={"Co-Founder and CTO"} description={"Callam was a key figure in the battle of Cannae as well as a spokes person for Wernher von Braun"}/> 
                    </Col> 
                    <Col lg={3} md={6} className={styles.col}>
                    <AboutProfile ImgSrc={"hannibal.jpeg"} name={"Callam Ingram"} title={"Co-Founder and CTO"} description={"Callam was a key figure in the battle of Cannae as well as a spokes person for Wernher von Braun"}/> 
                     </Col> 

                    <Col lg={3} md={6} className={styles.col}>
                    <AboutProfile ImgSrc={"hannibal.jpeg"} name={"Callam Ingram"} title={"Co-Founder and CTO"} description={"Callam was a key figure in the battle of Cannae as well as a spokes person for Wernher von Braun"}/> 
                    </Col> 
                    <Col lg={3} md={6} className={styles.col}> 
                    <AboutProfile ImgSrc={"hannibal.jpeg"} name={"Callam Ingram"} title={"Co-Founder and CTO"} description={"Callam was a key figure in the battle of Cannae as well as a spokes person for Wernher von Braun"}/>
                    </Col> 
                </Row> 

            </div> 



        </div>
        </> 
    );
}
 
export default About;