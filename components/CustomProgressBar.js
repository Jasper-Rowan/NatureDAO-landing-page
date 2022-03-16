/**
 * A custom progress bar that supports changing color and length
 *
 * @param {bgcolor} color of the progress bar
 * @param {completed} the width of the progressbar  
 * @returns a progress bar component
 */

const CustomProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      transition: 'width 1s ease-in-out',
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}`}</span>
        </div>
      </div>
    );
  };
  
  export default CustomProgressBar;