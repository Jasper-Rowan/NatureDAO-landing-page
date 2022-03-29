import React , { useState } from "react";
import styles from "../styles/components_styles/carousel.module.css";
import { Col, Row } from "react-bootstrap";


const Carousel = (props) => {


    const [activeIndex, setActiveIndex] = useState(0);


    const updateIndex = (newIndex) => {
        if (newIndex >= 0 && newIndex < React.Children.count(props.children) ) {
            setActiveIndex(newIndex);
        } 
    }
    const inner = {
        whiteSpace: 'nowrap',
        transition: 'transform 0.3s',
        transform: `translateX(${-((activeIndex * 45)- 25)}%)`
    } 

    const updateOpacity = (_activeIndex, index) => {
        
        if (_activeIndex == index) {
         return 1.00;
        } else {
            return .50; 
        }
    }

    if (typeof window !== "undefined") {
        if (window.matchMedia('(max-width: 767px)').matches) {
            inner.transform = `translateX(${-((activeIndex * 75.5) - 13)}%)`;

        } else {
            inner.transform = `translateX(${-((activeIndex * 45)- 25)}%)`;
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
            <div style={inner}> 
                {React.Children.map(props.children, (child, index) => {
                    return React.cloneElement(child, {_opacity: updateOpacity(activeIndex, index)} );
                })}
            </div> 
        </div> 

        </>
     );
}
 
export default Carousel;