import styles from "./HomePage.module.scss";
import { useContext, useEffect, useState } from "react";
import { getAllCartItems } from "/services/cart";
import { getFilteredProducts } from "/services/products";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import { FavouritesContext } from "../../context/FavouritesContextProvider/FavouritesContextProvider";
import Carousel from "../../components/Carousel/Carousel";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const HomePage = () => {
  const { setCart } = useContext(CartContext);
  const { setFavouriteProducts } = useContext(FavouritesContext);
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCartItems().then((response) => setCart(response));
    getFilteredProducts("isFavourite", true).then((response) =>
      setFavouriteProducts(response)
    );
  }, []);

  useEffect(() => {
    setLoading(true);
    getFilteredProducts("isFeatured", true).then((response) => {
      setFeaturedProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    <main className={styles.wrapper}>
      {loading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {featuredProducts && !loading && <Carousel data={featuredProducts} />}
    </main>
  );
};

export default HomePage;
