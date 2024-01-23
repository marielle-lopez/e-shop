import styles from "./ProductCard.module.scss";

const ProductCard = ({ title, artist, coverImg, cheapestPrice }) => {
  return (
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
  );
};

export default ProductCard;
