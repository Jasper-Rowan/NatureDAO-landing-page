import styles from "../styles/components_styles/carousel.module.css";
import React , { useState } from "react";

const CarouselItem = (props) => {
    

    return ( 
        <div className={styles.carousel_item} style={{width : props.width, opacity: props._opacity}}>
            {props.children}
        </div>
     );
}
 
export default CarouselItem;