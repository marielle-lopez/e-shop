import styles from "./CartItemsList.module.scss";
import { useContext, useEffect, useState } from "react";
import CartItemCard from "../../components/CartItemCard/CartItemCard";
import { removeItemFromCart } from "/services/cart";
import { adjustProductQty } from "/services/products";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import { getAllCartItems } from "../../../services/cart";

const CartItemsList = ({ items }) => {
  const { setCart } = useContext(CartContext);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log("Item removed from cart.");
  }, [clicked]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headings}>
        <p className={styles.headings__blank}></p>

        <div className={styles.headings__items}>
          <p className={styles.headings__items__item}>Product</p>
          <p className={styles.headings__items__item}>Format</p>
          <p className={styles.headings__items__item}>Quantity</p>
          <p className={styles.headings__items__item}>Unit Price</p>
          <p className={styles.headings__items__item}>Total Price</p>
        </div>
      </div>

      {items &&
        items.map((item) => (
          <div key={item.id + "_div"} className={styles.card_wrapper}>
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
                setClicked(true);
                removeItemFromCart(item.id);
                adjustProductQty(
                  item.productId,
                  item.format,
                  item.img,
                  item.isOnSale,
                  item.unitPrice,
                  item.inStockQty,
                  item.inStockQty + item.qty
                );
                getAllCartItems().then((response) => setCart(response));
                setClicked(false);
              }}
              className={styles.remove_btn}
            >
              <img className={styles.bin_icon} src="/bin.png" alt="Bin icon" />
            </button>
          </div>
        ))}
    </div>
  );
};

export default CartItemsList;
