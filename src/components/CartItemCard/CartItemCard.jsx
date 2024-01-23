import styles from "./CartItemCard.module.scss";

const CartItemCard = ({
  id = 0,
  format = 0,
  title = 0,
  img = "",
  qty = 0,
  unitPrice = 0,
  totalPrice = 0,
}) => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.img}
        src="../src/assets/placeholder.png"
        alt={`${title} cover`}
      />
      <div className={styles.info}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.id}>{id}</p>
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
