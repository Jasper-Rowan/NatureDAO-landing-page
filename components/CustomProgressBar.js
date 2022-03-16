import { position } from '@chakra-ui/react';
import {useState, useEffect} from 'react';
import {Container, Row, Col} from "react-bootstrap";

const Tick = (props) => {
  const tickDiv = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: 70,
    width: 150,
    margin: 0,
    padding: 0,
    position: "relative",
    bottom: 15,
  };

  const topRow = {
    height: "60%",
    width: "50%",
    borderRight: "solid",
    borderColor: "#90A4FF",
    borderWidth: 1.5,
    margin: 0,
    padding: 0,
  };

  const bottomRow = {
    height: "30%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  };
  return (
    <>
      <Container fluid style={tickDiv}>
        <Row style={topRow}></Row>
        <Row style={bottomRow}>{props.name}</Row>
      </Container>
    </>
  );
};

/**
 * A custom progress bar that supports changing color and length
 *
 * @param {bgcolor} color of the progress bar
 * @param {completed} the width of the progressbar  
 * @returns a progress bar component
 */
const CustomProgressBar = (props) => {
    const { bgcolor } = props;
    const [completed, setCompleted] = useState(1);
    
    useEffect(() => {
        setTimeout(setCompleted, 1000, props.completed);
      }, []); 
    
    const boxStyles = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }

    const topText = {
      display: 'flex',
      justifyContent: 'space-between', 
    }

    const containerStyles = {
      height: 10,
      width: '100%',
      background: 'rgb(44, 49, 75)',
      borderRadius: 50,
    }
  
    const fillerStyles = {
      transition: 'width 1.5s ease-in-out',
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'flex-end'

    }
  
    const pointerStyles = {
      borderRadius: 100, 
      height: 15,
      width: 15,
      position: 'relative',
      bottom: 2.5,
      left: 1,
      background: '#FFFFFF',
      border: '3px solid #3772FF',
      boxSizing: 'border-box'
      
    }

    const tickBox = {
        display: 'flex',
        justifyContent: 'space-around'
    }
  
    return (
      <div style={boxStyles}>
        <div style={topText}>
          <p>
            <span style={{ color: "#9399BC" }}>Raised</span> - 1,450 Tokens
          </p>
          <p>
            <span style={{ color: "#9399BC" }}>Target</span> - 150,000 Tokens
          </p>
        </div>

        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span>
              <div style={pointerStyles}></div>
            </span>
          </div>

          <div style={tickBox}>
            <Tick name="Pre Sale" />
            <Tick name="Soft Cap" />
            <Tick name="Hard Cap" />
          </div>
        </div>
      </div>
    );
  };
  
  export default CustomProgressBar;