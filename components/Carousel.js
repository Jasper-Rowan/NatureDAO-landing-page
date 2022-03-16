import React , { useState } from "react";
import CarouselItem from "./CarouselItem";
import styles from "../styles/components_styles/carousel.module.css";
import { Button } from "react-bootstrap";



const Carousel = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);


    const updateIndex = (newIndex) => {
        if (newIndex >= -1 && newIndex < React.Children.count(props.children) - 1) {
            setActiveIndex(newIndex);
        } 
    }
    
    return ( 
        <>
        <div className={styles.carousel}> 
            <div className={styles.inner} style={{ transform: `translateX(${-(activeIndex * 33.3)}%)`}}> 
                {React.Children.map(props.children, (child, index) => {
                    return React.cloneElement(child, {width: '33.3%'});
                })}
            </div> 
        </div> 
        <div className={styles.indicators}> 

            <Button onClick={ () => {
               updateIndex(activeIndex - 1); 
            }}
            >
                Prev
            </Button>

            <Button onClick={ () => {
                updateIndex(activeIndex + 1); 
            }}
            >
                Next
            </Button>

        </div>

        </>
     );
}
 
export default Carousel;