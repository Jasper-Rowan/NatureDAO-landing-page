import {useState, useEffect} from 'react';

const Tick = (props) => {
    
    const outerBox = {
      display: 'flex',
      flexDirection: 'column',
      height: 10,
      width: '100%',
      position: 'relative',
      bottom: 5
    }

    const tick = {
      height: '70%',
      width: '50%',
      border: 'solid',
      borderColor: '#90A4FF'
    }

    const text = {
      color: 'blue',
      height: '30%',
      width: '100%',
      border: 'solid',
      borderColor: 'red'

    }
    return (
      <>
        <div styles={outerBox}>
          <div styles={tick}>
            <div styles={text}>
              <p styles={{color: 'blue'}}>{props.children}</p>
            </div>
          </div>
        </div>
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
      justifyContent: 'flex-end'
    }

    const topText = {
      display: 'flex',
      justifyContent: 'space-between' 
    }

    const containerStyles = {
      height: 10,
      width: '100%',
      backgroundColor: "#e0e0de",
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

    const tickDiv = {
      display: 'flex',
      justifyContent: 'space-around',
      height: 500,
      border: 'solid',
      borderColor: 'red'
    }
  
    return (
      <div style={boxStyles}>
          <div style={topText}>
              <p><span style={{color: '#9399BC'}}>Raised</span> - 1,450 Tokens</p>
              <p><span style={{color: '#9399BC'}}>Target</span> - 150,000 Tokens</p>
          </div>

        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span>
              <div style={pointerStyles}></div>
            </span>
          </div>

            <div style={tickDiv}>
                <Tick>Pre Sale</Tick>
                <Tick>Soft Cap</Tick>
                <Tick>Hard cap</Tick>
            </div>
        </div>
      </div>
    );
  };
  
  export default CustomProgressBar;