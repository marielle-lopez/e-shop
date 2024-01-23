import styles from "./CartItemsList.module.scss";
import CartItemCard from "../../components/CartItemCard/CartItemCard";

const CartItemsList = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      {items &&
        items.map((item) => (
          <div className={styles.card_wrapper}>
            <CartItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              format={item.format}
              img={item.img}
              qty={item.qty}
              unitPrice={item.price}
              totalPrice={item.totalPrice}
            />
            <button className={styles.remove_btn}>
              <img
                className={styles.bin_icon}
                src="../src/assets/bin.png"
                alt="Bin icon"
              />
            </button>
          </div>
        ))}
    </div>
  );
};

export default CartItemsList;
