import {Row, Col}from "react-bootstrap";
import styles from "../styles/about.module.css";
import AboutProfile from "../components/AboutProfile";

const About = () => {
    return (
      <>
        <div className={styles.main}>
          <div className={styles.fill}>
            <img src="/HologramPlanet.gif" />
          </div>
          <div className={styles.image1}>
            <img src="backgroundImage.svg" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.header}> About GreenVault </h1>

            <p className={styles.body}>
              <em>
                “Gold gets dug out of the ground in Africa, or someplace. Then
                we melt it down, dig another hole, bury it again and pay people
                to stand around guarding it.”
              </em>{" "}
              -Warren Buffett{" "}
            </p>
            <p className={styles.body}>
              <strong>Problem</strong> - The majority of mined gold is stored in
              vaults, and banks issue digital instruments to give investors
              access to its value. However, gold mining irreversibly damages the
              planet. For this reason it is inaccessible to impact investors.
            </p>
            <p className={styles.body}>
              <strong>Solution</strong> - GreenVault minimizes the damaging
              impact of mining gold by placing mines into conservation and
              creating a digital token that derives value from this process.
              This token, ORE, is the only vehicle that impact investors can
              access gold through. Other vehicles are environmentally
              destructive.
            </p>
            <p className={styles.body}>
              <strong>Method</strong> - GreenVault is uniquely positioned to
              execute where no one else can. By partnering with a top mineral
              exploration group, GreenVault utilizes state-of-the-art geological
              methods to verify gold deposits accurately and cheaply. GreenVault
              then hires third party auditors to double-validate the reserves of
              a given mining project. Through a series of public legal
              contracts, GreenVault purchases the resource rights for this
              reserve to prevent it from being mined. Simultaneously, GreenVault
              hires third party conservation companies to access carbon and
              biodiversity credits associated with this conservation effort. The
              credits are used to fund the licensing, surveillance, and
              maintenance of each project. As more projects are added to
              GreenVault, more value backs the fixed amount of ORE tokens.
            </p>
          </div>

          <div className={styles.middle}>
            <h1 className={styles.header2}> Mission </h1>

            <p className={styles.body2}>
              Our mission is to separate the need for gold mining from the
              desire to invest in gold. GreenVault’s endgame is to stop the
              practice of illegal mining by offering local communities a
              platform to create economic growth from a resource without mining
              and all the negative externalities that come with it.
            </p>

            <h1 className={styles.header2}> Vision </h1>

            <p className={styles.body2}>
              GreenVault will create an avenue for investors to profit from the
              conservation of biodiverse land and the prevention of carbon
              emissions. GreenVault will sell tokens from a treasury to fund the
              acquisition of more mining projects. As GreenVault absorbs the
              world’s unmined gold reserves, it rewards both investors and the
              environment.
            </p>

            <h1 className={styles.header2}> Team </h1>

            <Row className={styles.row}>
              <Col lg={3} md={6} className={styles.col}>
                <AboutProfile
                  ImgSrc={"hannibal.jpeg"}
                  name={"Callam Ingram"}
                  title={"Co-Founder and CTO"}
                  description={
                    "Callam was a key figure in the battle of Cannae as well as a spokes person for Wernher von Braun"
                  }
                />
              </Col>
              <Col lg={3} md={6} className={styles.col}>
                <AboutProfile
                  ImgSrc={"hannibal.jpeg"}
                  name={"Callam Ingram"}
                  title={"Co-Founder and CTO"}
                  description={
                    "Callam was a key figure in the battle of Cannae as well as a spokes person for Wernher von Braun"
                  }
                />
              </Col>

              <Col lg={3} md={6} className={styles.col}>
                <AboutProfile
                  ImgSrc={"hannibal.jpeg"}
                  name={"Callam Ingram"}
                  title={"Co-Founder and CTO"}
                  description={
                    "Callam was a key figure in the battle of Cannae as well as a spokes person for Wernher von Braun"
                  }
                />
              </Col>
              <Col lg={3} md={6} className={styles.col}>
                <AboutProfile
                  ImgSrc={"hannibal.jpeg"}
                  name={"Callam Ingram"}
                  title={"Co-Founder and CTO"}
                  description={
                    "Callam was a key figure in the battle of Cannae as well as a spokes person for Wernher von Braun"
                  }
                />
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
}
 
export default About;