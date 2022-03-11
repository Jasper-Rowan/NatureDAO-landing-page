import { useState } from "react";
import Countdown from 'react-countdown';
import styles from '../styles/CountDownClock.module.css';

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
          <div className={styles.divParent}>
            <div className={styles.divChild}>
              <p className={styles.p}>ORE token sale begins in :</p>
              <span className={styles.span}>
                {days} {hours} {minutes} {seconds}
              </span>
            </div>
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