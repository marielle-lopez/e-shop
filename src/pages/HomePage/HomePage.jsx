import { useContext, useEffect, useState } from "react";
import styles from "./HomePage.module.scss";

import Carousel from "../../components/Carousel/Carousel";
import { getFeaturedProducts } from "../../services/products";
// import { ProductsContext } from "../../context/ProductsContextProvider/ProductsContextProvider";
// import { getAllProducts } from "../../services/products";

const HomePage = () => {
  // const { products, setProducts } = useContext(ProductsContext);

  // useEffect(() => {
  //   getAllProducts().then((response) => {
  //     setProducts(response);
  //   });
  // }, []);

  const [featuredProducts, setFeaturedProducts] = useState(null);

  useEffect(() => {
    getFeaturedProducts().then((response) => setFeaturedProducts(response));
  }, []);

  return (
    <main>{featuredProducts && <Carousel data={featuredProducts} />}</main>
  );
};

export default HomePage;
