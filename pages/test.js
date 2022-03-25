// import React, {useEffect, useState} from 'react'
// import { Button } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import styles from '../styles/test.module.css';

// import { useWeb3React } from '@web3-react/core';
// import { InjectedConnector } from '@web3-react/injected-connector';
// import Web3 from 'web3';



// export const injected = new InjectedConnector({
//   supportedChainIds: [1, 3, 4, 5, 42],
// })


// export default function Test() {
//     const {active, account, library, connector, activate, deactivate, provider} = useWeb3React();


   
//     const web3 = new Web3(process.env.NEXT_PUBLIC_ETH_MAINNET);
//     // const web3 = provider; 

//     const [balance, setBalance] = useState(0); 



//     useEffect(() => {
//       // declare the data fetching function
//       const fetchData = async () => {
//         if (active) {

//           let data = await web3.eth.getBalance(account);

//           setBalance(Web3.utils.fromWei(data, 'ether'))
//           console.log(Web3.utils.fromWei(data, 'ether'))
//         }
//       }

//       // call the function
//       fetchData()
//         // make sure to catch any error
//         .catch(console.error);
//     }, [active])



//     async function connect() {

//       try {
//        await activate(injected);

//       } catch (ex) {
//         console.log(ex);
//       }
//     }



//     async function disconnect() {
//       try {
//         await deactivate();
//         setBalance(0);
//       } catch (ex) {
//         console.log(ex);
//       }
//     }

    

//     return (


//         <div className={styles.main}>
//             <div> Network: <strong style={{color:"red"}}> {' '} {active.toString()} </strong> </div> 
//             <div> Wallet Address: {account} </div> 
//             <div> Account Balance: {balance} ETH </div> 

//             <Button onClick={connect}> Connect Wallet</Button>
//             <Button onClick={disconnect}> Disconnect Wallet</Button>

//         </div>
//     );
// }