import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import CartItemsList from "../../containers/CartItemsList/CartItemsList";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <main>
      <h2>Cart</h2>

      {cart && <CartItemsList items={cart} />}

      {/* {cart &&
        cart.map((item) => (
          <>
            <p>{item.productId}</p>
            <p>{item.format}</p>
            <p>{item.qty}</p>
            <p>{item.totalPrice}</p>
          </>
        ))} */}
    </main>
  );
};

export default CartPage;
