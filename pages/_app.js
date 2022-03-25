import Layout from '../components/Layout';
import '../styles/globals.css';
// import Web3 from 'web3';
// import { Web3ReactProvider } from '@web3-react/core';


// function getLibrary(provider) {
//   return new Web3(provider);
// }


function MyApp({ Component, pageProps }) {
  return (
    // <Web3ReactProvider getLibrary={getLibrary}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    //</Web3ReactProvider>
  )
}


export default MyApp