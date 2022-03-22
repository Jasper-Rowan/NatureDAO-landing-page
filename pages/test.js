import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import styles from '../styles/test.module.css';

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}


export default function Test() {

    return (
      <>
        <Container className={styles.main} fluid>
            <div> Network: </div> 
            <div> Wallet Address: </div> 
            <div> Account Balance: </div> 
            <Button> Connect Wallet</Button>
            <Web3ReactProvider getLibrary={getLibrary}>
                
            </Web3ReactProvider>
        </Container>
      </>
    );
}