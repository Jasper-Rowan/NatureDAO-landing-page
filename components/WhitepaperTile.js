import styles from "../styles/WhitepaperTile.module.css";

const WhitepaperTile = (props) => {
    return (
      <div className={styles.tile}>
        <div className={styles.imgDiv}>
          {/* <img className={styles.image} src={props.image_link} /> */}
        </div>

        <h1 className={styles.h1}>{props.h1}</h1>

        <p className={styles.body}>{props.body}</p>
      </div>
    );
}
 
export default WhitepaperTile;
