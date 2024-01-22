import styles from "./Carousel.module.scss";
import { useState } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handleDecrement = () => {
    if (index === 0) {
      setIndex(4);
      return;
    }

    setIndex(index - 1);
  };

  const handleIncrement = () => {
    if (index === 4) {
      setIndex(0);
      return;
    }

    setIndex(index + 1);
  };

  const data = [
    {
      image:
        "https://www.adobomagazine.com/wp-content/uploads/2023/05/Niki-announces-Nicole-World-Tour-hero.jpg",
    },
    {
      image:
        "https://snworksceo.imgix.net/tsn/80fb33a0-3b27-48b5-b242-bb82475f36c8.sized-1000x1000.jpg?w=1000",
    },
    {
      image:
        "https://static.az-cdn.ch/__ip/o_cifbbliVqS5-ZS70lIeBqDV1M/5b79d190c9f04327cece299520a9bcea32a4b2b6/remote.adjust.rotate=0&remote.size.w=6393&remote.size.h=2913&local.crop.h=2913&local.crop.w=5179&local.crop.x=699&local.crop.y=0&r=1,n-wide2x-16x9-far",
    },
    {
      image:
        "https://assets.vogue.com/photos/62e991bea23f41cb3ed0455b/master/w_2560%2Cc_limit/Sabrina%2520Carpenter_Press%2520Photo_Photo%2520Credit%2520Vince%2520Aung_2.jpg",
    },
    {
      image:
        "https://www.billboard.com/wp-content/uploads/2022/08/06-beyonce-cr-Mason-Poole-billboard-1548.jpg",
    },
  ];

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
          <h2>Album Title</h2>
          <p>Artist Name</p>
          <button>See available audio formats</button>
        </section>

        <button className={styles.button} onClick={handleIncrement}>
          <img
            className={styles.icon}
            src="src/assets/right-chevron.png"
            alt="Right chevron icon"
          />
        </button>
      </div>
      <img className={styles.showcase_img} src={data[index].image} />
    </>
  );
};

export default Carousel;
