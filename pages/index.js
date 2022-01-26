import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ScrollContainer, ScrollPage, Animator, Sticky } from 'react-scroll-motion';

export default function Home() {
  return (
    <div>

      <Container className={styles.main_window} fluid>
        <Row className={styles.row1}>
        </Row>
        <Row className={styles.row2}>
          <h1 className={styles.title}>
            <strong>GOLD X CRYPTO</strong>
          </h1>
        </Row>
        <Row className={styles.row3}>
          <Col className={styles.col1} xs={12} sm={true}>
            <h2>
              Merging the <strong>security</strong> and flexibility of cryptocurrency with 
              the <strong>trust</strong> and legacy of gold.{" "}
            </h2>
          </Col>
          <Col className={styles.col2} xs={12} sm={true}>
            <p className={styles.paragraph}>
              Monetize your gold reserves in a fraction of the time, at a
              fraction of the cost, all with zero environmental impact. Learn
              how the Eco-vault is democratizing access to gold-backed reserves.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid>
         <Row className={styles.r1}>
           <Col className={styles.c1}>
             {/* <ScrollContainer> 
               <ScrollPage page={0}> 
               <Animator animation={Sticky()}> 

                  <h1>  </h1> 

               </Animator>
               </ScrollPage> 
             </ScrollContainer> */}
           </Col>
         </Row>
       </Container>
    </div>
  );
}
