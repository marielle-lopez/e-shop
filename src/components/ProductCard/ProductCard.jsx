import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, artist, coverImg, cheapestPrice }) => {
  return (
    <Link className={styles.link} to={`/product/${id}`}>
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          src={coverImg}
          alt={`Cover of ${title} by ${artist}`}
        />

        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.artist}>{artist}</p>
          {cheapestPrice ? (
            <p className={styles.price}>{`$${cheapestPrice}`}</p>
          ) : (
            <p className={styles.price__unavailable}>Coming soon</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
