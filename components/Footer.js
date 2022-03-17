import React from "react";
import styles from '../styles/Footer.module.css'
import { faGithub, faTwitter, faDiscord, faTelegram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Container, Row, Col} from 'react-bootstrap'
import EmailBox from "../components/EmailBox";

function Footer() {
    return (
      <>
        <Container fluid className={styles.container}>
          <Row className={styles.row}>
            <h1 className={styles.h1}>
              Stay in the loop, never miss an update
            </h1>
            <EmailBox />
            <p>
              Subscribe to our newsletter to receive the latest information
              about GreenVault and the markets, directly to your inbox
            </p
            <div className={styles.icon_div}>
              <span className={styles.social_media}>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className={styles.icon} icon={faGithub} />
                </a>
                <a
                  href="https://twitter.com/?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                </a>
                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className={styles.icon} icon={faDiscord} />
                </a>
                <a
                  href="https://telegram.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className={styles.icon} icon={faTelegram} />
                </a>
              </span>
            </div>
            <div className={styles.footer}>
              <p>Copyright © 2022. All rights reserved by GreenVault LLC.</p>
            </div>
          </Row>
        </Container>
        <a id="bottom"></a>
      </>
    );
}

export default Footer
