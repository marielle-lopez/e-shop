import styles from "./CartItemCard.module.scss";
import { Link } from "react-router-dom";

const CartItemCard = ({
  productId = "Unknown",
  format = "Unknown",
  title = "Unknown",
  artist = "Unknown",
  img = "../src/assets/placeholder.png",
  qty = "Unknown",
  unitPrice = 0,
  totalPrice = 0,
}) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={img} alt={`${title} cover`} />
      <div className={styles.info}>
        <div className={styles.title_id_wrapper}>
          <h3 className={styles.heading}>
            <Link className={styles.product_link} to={`/product/${productId}`}>
              <span className={styles.title}>{title}</span>
              <span className={styles.artist}> by {artist}</span>
            </Link>
          </h3>
          <p className={styles.id}>{productId}</p>
        </div>
        <p className={styles.format}>{format}</p>
        <p className={styles.qty}>{qty}</p>
        <p className={styles.unit_price}>${(unitPrice / 100).toFixed(2)}</p>
        <p className={styles.total_price}>${(totalPrice / 100).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItemCard;
