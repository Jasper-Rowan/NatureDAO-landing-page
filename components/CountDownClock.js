import Countdown from 'react-countdown';
import styles from '../styles/CountDownClock.module.css';

/**
 * A Count Down Clock component built with the react-countdown libary.
 * @returns A clock component which counts down the days/hours/min/sec until the specified date.
 */

const CountDownClock = () => {
    // Component rendered when timer reaches 0
    // TODO: style this nicly
    const Completionist = () => <span>Launched!</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <Completionist />;
      } else {
        return (
          <div className={styles.divContainer}>
            <p className={styles.p}>ORE token sale begins in :</p>
            <span className={styles.span}>
              <div className={styles.box}>
                {days} <span className={styles.text}>Days</span>
              </div>
              <div className={styles.box}>
                {hours} <span className={styles.text}>Hours</span>
              </div>
              <div className={styles.box}>
                {minutes} <span className={styles.text}>Minutes</span>
              </div>
              <div className={styles.box}>
                {seconds} <span className={styles.text}>Seconds</span>
              </div>
            </span>
          </div>
        );
      }
    };

    return (
        // The date format is 'year-month-day T hour:min:sec'
        <Countdown date={'2022-09-12T00:00:00'} renderer={renderer} />
    );
}
 
export default CountDownClock;