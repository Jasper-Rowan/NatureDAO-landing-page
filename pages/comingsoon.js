import React from 'react'
import Head from 'next/head'
import CustomNavbar from "../components/CustomNavbar";


export default function ComingSoon() {

    return (
      <>
        <CustomNavbar />
        <div className="styles.container1">
          <h1>
            <strong className="styles.inner">COMING SOON</strong>
          </h1>
        </div>
      </>
    );
}
