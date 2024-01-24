import styles from "./NumberInput.module.scss";
import { useState, useEffect } from "react";

const NumberInput = ({ min, max, qty, setQty }) => {
  const handleDecrement = () => {
    if (qty === 1) {
      return;
    }

    setQty(qty - 1);
  };

  const handleIncrement = () => {
    if (qty === max) {
      return;
    }

    setQty(qty + 1);
  };

  console.log("Re-rendered: ", qty);

  return (
    <>
      <button onClick={handleDecrement} className={styles.decrement_btn}>
        -
      </button>
      <input
        className={styles.input}
        type="number"
        min={min.toString()}
        max={max.toString()}
        value={qty}
        onChange={(e) => setQty(parseInt(e.target.value))}
      />
      <button onClick={handleIncrement} className={styles.increment_btn}>
        +
      </button>
    </>
  );
};

export default NumberInput;
