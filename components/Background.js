import Image from "next/image";
import styles from "../styles/Layout.module.css";

const Background = () => {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image src="/mine.png" layout="fill" objectFit="cover" quality={100} />
      </div>
    </>
  );
};


export default Background;
