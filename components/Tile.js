import styles from "../styles/components_styles/tile.module.css";


const Tile = (props) => {
    return (
        <div className={styles.tile}>
            
            <img className={styles.image} src={props.image_link}/> 
            
            <h1 className={styles.heading}>
                {props.heading}
            </h1> 

            <p className={styles.body}> 
                {props.body}
            </p>

        </div> 
    );
}
 
export default Tile;