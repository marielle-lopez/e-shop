import styles from "./CartItemsList.module.scss";
import CartItemCard from "../../components/CartItemCard/CartItemCard";
import { removeItemFromCart } from "../../services/cart";
import { adjustProductQty } from "../../services/products";

const CartItemsList = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      {items &&
        items.map((item) => (
          <div className={styles.card_wrapper}>
            <CartItemCard
              key={item.id}
              productId={item.productId}
              title={item.title}
              artist={item.artist}
              format={item.format}
              img={item.img}
              qty={item.qty}
              unitPrice={item.unitPrice}
              totalPrice={item.totalPrice}
            />
            <button
              onClick={() => {
                removeItemFromCart(item.id);
                adjustProductQty(
                  item.productId,
                  item.format,
                  item.img,
                  false,
                  item.unitPrice,
                  item.inStockQty,
                  item.inStockQty + item.qty
                );
              }}
              className={styles.remove_btn}
            >
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
