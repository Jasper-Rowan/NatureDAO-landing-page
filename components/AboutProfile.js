import styles from "../styles/components_styles/AboutProfile.module.css";
import { Image } from "react-bootstrap";

const AboutProfile = (props) => {
    return ( 
    
    <div className={styles.main}>  
        <div className={styles.photo}>
            <Image style={{width:"100%", height:"100%", objectFit:"contain", borderRadius:"50%"}} src={props.ImgSrc}/> 
        </div>

        <h1 style={{color: "#48DCA8", fontFamily: "Poppins", fontWeight:"600", fontSize:"25px", margin: "10px"}}> 
            {props.name}
        </h1>

        <h2 style={{color: "white", fontFamily: "Poppins", fontWeight:"100", fontSize:"20px", margin: "10px"}}> {props.title} </h2>

        <p style={{color: "white", fontFamily: "Poppins", fontWeight:"100", fontSize:"15px", margin: "10px"}} > {props.description} </p> 
    </div> 

    );
}
 
export default AboutProfile;