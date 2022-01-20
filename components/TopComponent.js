import React from 'react'
import Container from 'react-bootstrap/Container';
import CustomNavbar from './CustomNavbar'; 

function TopComponent() {
    return (
      <>
        <div className="mainWindow">
          <CustomNavbar />
          <h1 className="middleRow">
            <strong>GOLD X CRYPTO</strong>
          </h1>
          <div className="text-box">
            <p className="text1">
              Simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text2">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
      </>
    );

}

export default TopComponent