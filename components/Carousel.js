import React , { useState } from "react";
import CarouselItem from "./CarouselItem";
import styles from "../styles/components_styles/carousel.module.css";
import { Button, Col, Row } from "react-bootstrap";


const Carousel = (props) => {


    const [activeIndex, setActiveIndex] = useState(1);
    const [shiftDist, setShiftDist] = useState(45);
    const [shiftOffset, setShiftOffset] = useState(25);


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

    const setMobile = () => {
        setShiftDist(50);
        setShiftOffset(40);
    }

    const updateOpacity = (_activeIndex, index) => {
        if (typeof window !== "undefined") {
            if (window.matchMedia('(max-width: 1000px)').matches) {
                console.log("screenless then 1000px");
                inner.transform = `translateX(${-((activeIndex * 75.5) - 13)}%)`;

            } else {
                console.log("greater")
            }
        } else {
            console.log("window not found")
        }
        
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