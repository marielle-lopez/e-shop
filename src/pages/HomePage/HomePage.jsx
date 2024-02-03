import styles from "./HomePage.module.scss";
import { useContext, useEffect, useState } from "react";
import { getAllCartItems } from "/services/cart";
import { getFilteredProducts } from "/services/products";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import { FavouritesContext } from "../../context/FavouritesContextProvider/FavouritesContextProvider";
import Carousel from "../../components/Carousel/Carousel";

const HomePage = () => {
  const { setCart } = useContext(CartContext);
  const { setFavouriteProducts } = useContext(FavouritesContext);
  const [featuredProducts, setFeaturedProducts] = useState(null);

  useEffect(() => {
    getAllCartItems().then((response) => setCart(response));
  }, []);

  useEffect(() => {
    getFilteredProducts("isFeatured", true).then((response) =>
      setFeaturedProducts(response)
    );

    getFilteredProducts("isFavourite", true).then((response) =>
      setFavouriteProducts(response)
    );
  }, []);

  return (
    <main>{featuredProducts && <Carousel data={featuredProducts} />}</main>
  );
};

export default HomePage;
