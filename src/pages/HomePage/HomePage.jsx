import { useContext, useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import { getAllCartItems } from "../../services/cart";

import Carousel from "../../components/Carousel/Carousel";
import { getFeaturedProducts } from "../../services/products";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";

const HomePage = () => {
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    getAllCartItems().then((response) => setCart(response));
  }, []);

  const [featuredProducts, setFeaturedProducts] = useState(null);

  useEffect(() => {
    getFeaturedProducts().then((response) => setFeaturedProducts(response));
  }, []);

  return (
    <main>{featuredProducts && <Carousel data={featuredProducts} />}</main>
  );
};

export default HomePage;
