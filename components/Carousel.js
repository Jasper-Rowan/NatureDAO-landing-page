import React , { useState } from "react";
import CarouselItem from "./CarouselItem";
import styles from "../styles/components_styles/carousel.module.css";
import { Button, Col, Row } from "react-bootstrap";


const Carousel = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);


    const updateIndex = (newIndex) => {
        if (newIndex >= 0 && newIndex < React.Children.count(props.children) ) {
            setActiveIndex(newIndex);
        } 
    }

        const updateOpacity = (_activeIndex, index) => {
        if (_activeIndex == index) {
            return 1.00;
        } else {
            return .50; 
        }
    }
    
    return ( 
        <>

        <Row className={styles.row}>
            <Col className={styles.col} onClick={ () => {
               updateIndex(activeIndex - 1); 
            }}> 
            
            </Col>
            <Col> 
            </Col> 

            <Col className={styles.col} onClick={ () => {
                updateIndex(activeIndex + 1); 
            }}
            > 
            
            </Col>
        </Row>

        <div className={styles.carousel}> 
            <div className={styles.inner} style={{ transform: `translateX(${-((activeIndex * 45) - 27.5)}%)`}}> 
                {React.Children.map(props.children, (child, index) => {
                    return React.cloneElement(child, {width: '45%', _opacity: updateOpacity(activeIndex, index)} );
                })}
            </div> 
        </div> 

        </>
     );
}
 
export default Carousel;