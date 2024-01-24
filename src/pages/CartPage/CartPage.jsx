import { useContext, useEffect } from "react";
import { subscribeToCart } from "../../../services/cart";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import CartItemsList from "../../containers/CartItemsList/CartItemsList";
import PaddingWrapper from "../../containers/PaddingWrapper/PaddingWrapper";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const unsubscribeFn = subscribeToCart(setCart);

    return () => unsubscribeFn();
  }, [cart]);

  return (
    <PaddingWrapper>
      <main>
        <h2>Cart</h2>
        {cart.length !== 0 ? (
          <CartItemsList items={cart} />
        ) : (
          <p>Your shopping cart is empty.</p>
        )}
      </main>
    </PaddingWrapper>
  );
};

export default CartPage;
