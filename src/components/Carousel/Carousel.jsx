import { Link } from "react-router-dom";
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
        <button className={styles.chevron} onClick={handleDecrement}>
          <img
            className={styles.icon}
            src="/left-chevron.png"
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
          <Link to={`/product/${data[index].id}`}>
            <Button
              text="See available audio formats"
              variant="primary"
              size="large"
            />
          </Link>
        </section>

        <button className={styles.chevron} onClick={handleIncrement}>
          <img
            className={styles.icon}
            src="/right-chevron.png"
            alt="Right chevron icon"
          />
        </button>
      </div>
      <img className={styles.showcase_img} src={data[index].showcaseImg} />
    </>
  );
};

export default Carousel;
