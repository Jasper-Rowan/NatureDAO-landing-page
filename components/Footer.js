import React from "react";
import styles from '../styles/Footer.module.css'
import { faGithub, faTwitter, faDiscord, faTelegram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
      <>
        <footer className={styles.footer}>
          <span className={styles.social_media}>
           <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={styles.icon} icon={faGithub} /></a> 
           <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={styles.icon} icon={faTwitter} /></a> 
           <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={styles.icon} icon={faDiscord} /></a> 
           <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={styles.icon} icon={faTelegram} /></a> 
          </span>
        </footer>
        <a id="bottom"></a>
      </>
    );
}

export default Footer
