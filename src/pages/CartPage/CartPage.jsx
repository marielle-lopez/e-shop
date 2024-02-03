import styles from "./CartPage.module.scss";

import { useContext, useEffect } from "react";
import { subscribeToCart, getAllCartItems } from "../../../services/cart";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import CartItemsList from "../../containers/CartItemsList/CartItemsList";
import PaddingWrapper from "../../containers/PaddingWrapper/PaddingWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    getAllCartItems().then((response) => setCart(response));
  }, []);

  // useEffect(() => {
  //   const unsubscribeFn = subscribeToCart(setCart);

  //   return () => unsubscribeFn();
  // }, [cart]);

  return (
    <PaddingWrapper>
      <main>
        <PageHeading>Your Shopping Cart</PageHeading>
        {cart.length !== 0 ? (
          <>
            <div className={styles.headings}>
              <p className={styles.headings__blank}></p>

              <div className={styles.headings__items}>
                <p className={styles.headings__items__item}>Product</p>
                <p
                  className={[
                    styles.headings__items__item,
                    styles.headings__items__item__right,
                  ].join(" ")}
                >
                  Format
                </p>
                <p
                  className={[
                    styles.headings__items__item,
                    styles.headings__items__item__right,
                  ].join(" ")}
                >
                  Quantity
                </p>
                <p
                  className={[
                    styles.headings__items__item,
                    styles.headings__items__item__right,
                  ].join(" ")}
                >
                  Unit Price
                </p>
                <p
                  className={[
                    styles.headings__items__item,
                    styles.headings__items__item__right,
                  ].join(" ")}
                >
                  Total Price
                </p>
              </div>
            </div>
            <CartItemsList items={cart} />
          </>
        ) : (
          <p>Your shopping cart is empty.</p>
        )}
      </main>
    </PaddingWrapper>
  );
};

export default CartPage;
