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
      <PageHeading>Your Shopping Cart</PageHeading>
      {cart.length !== 0 ? (
        <CartItemsList items={cart} />
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
    </PaddingWrapper>
  );
};

export default CartPage;
