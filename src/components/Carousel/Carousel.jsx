import Button from "../Button/Button";
import styles from "./Carousel.module.scss";
import { useState } from "react";

const Carousel = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleDecrement = () => {
    if (index === 0) {
      setIndex(data.length - 1);
      return;
    }

    setIndex(index - 1);
  };

  const handleIncrement = () => {
    if (index === data.length - 1) {
      setIndex(0);
      return;
    }

    setIndex(index + 1);
  };

  return (
    <>
      <div className={styles.arrows_wrapper}>
        <button className={styles.button} onClick={handleDecrement}>
          <img
            className={styles.icon}
            src="src/assets/left-chevron.png"
            alt="Left chevron icon"
          />
        </button>

        <section className={styles.showcase_info}>
          <div className={styles.showcase_info__text}>
            <h2 className={styles.showcase_info__title}>{data[index].title}</h2>
            <p className={styles.showcase_info__artist}>
              by {data[index].artist}
            </p>
          </div>
          <Button text="See available audio formats" />
        </section>

        <button className={styles.button} onClick={handleIncrement}>
          <img
            className={styles.icon}
            src="src/assets/right-chevron.png"
            alt="Right chevron icon"
          />
        </button>
      </div>
      <img className={styles.showcase_img} src={data[index].showcaseImg} />
    </>
  );
};

export default Carousel;
