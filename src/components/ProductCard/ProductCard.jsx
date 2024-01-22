import styles from "./ProductCard.module.scss";

const ProductCard = ({ title, artist, coverImg }) => {
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
      </div>
    </div>
  );
};

export default ProductCard;
