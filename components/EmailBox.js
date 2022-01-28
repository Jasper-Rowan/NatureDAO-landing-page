import { Box } from "@chakra-ui/react";
import { useState } from "react";
import styles from "../styles/EmailBox.module.css";

export default function EmailBox() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
    };
    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });
    console.log(data);
  };

  return (
    <div className={styles.EmailBox}>
      <form onSubmit={handleSubmit} className={styles.textBox}>
        <label htmlFor="email" ></label>
        <Box className={styles.formBackground}> 
        <input
          className={styles.formInput}
          id="email"
          type="email"
          placeholder="type in your email for updates."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={styles.formButton} type="submit">Send</button>
        </Box> 
      </form>
    </div>
  );
}
