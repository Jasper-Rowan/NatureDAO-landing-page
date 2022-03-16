import styles from "../styles/components_styles/carousel.module.css";

const CarouselItem = ( props) => {
    return ( 
        <div className={styles.carousel_item} style={{width : props.width}}>
            {props.children}
        </div>
     );
}
 
export default CarouselItem;