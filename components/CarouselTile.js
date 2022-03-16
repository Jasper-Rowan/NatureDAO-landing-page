import styles from "../styles/components_styles/carousel.module.css";


const CarouselTile = ( props ) => {
    return ( 
    <div className={styles.carousel_tile}>
        <h1 className={styles.carousel_tile_title}> {props.title} </h1> 
        <p className={styles.carousel_tile_body}>  {props.body}  </p>
    </div> 
    );
}
 
export default CarouselTile;