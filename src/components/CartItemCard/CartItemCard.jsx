import styles from "./CartItemCard.module.scss";

const CartItemCard = ({
  productId = "Unknown",
  format = "Unknown",
  title = "Unknown",
  artist = "Unknown",
  img = "../src/assets/placeholder.png",
  qty = "Unknown",
  unitPrice = "Unknown",
  totalPrice = "Unknown",
}) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={img} alt={`${title} cover`} />
      <div className={styles.info}>
        <div>
          <h3 className={styles.title}>
            {title} by {artist}
          </h3>
          <p className={styles.id}>{productId}</p>
        </div>
        <p>{format}</p>
        <p>{qty}</p>
        <p>{unitPrice}</p>
        <p>{totalPrice}</p>
      </div>
    </div>
  );
};

export default CartItemCard;
