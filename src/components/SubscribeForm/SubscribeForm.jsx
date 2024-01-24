import styles from "./SubscribeForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email === "") {
      return;
    }

    console.log("Email sent!");
    setEmail("");
  };

  return (
    <form className={styles.wrapper}>
      <input
        className={styles.input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
      />
      <Button
        text="Subscribe"
        variant="primary"
        size="small"
        handleClick={handleSubmit}
        fnParams={email}
      />
    </form>
  );
};

export default SubscribeForm;
