import { useState } from "react";
import Countdown from 'react-countdown';

const CountDownClock = () => {
    
    const [count, setCount] = useState(0);

    // Random component
    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        return (
          <div style={{backgroundColor: "white"}}>
            <span>
              {days}:{hours}:{minutes}:{seconds}
            </span>
          </div>
        );
      }
    };

    return (
        // The date format is 'year-month-day T hour:min:sec'
        <Countdown date={'2022-03-12T00:00:00'} renderer={renderer} />
    );
}
 
export default CountDownClock;