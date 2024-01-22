import { useContext, useEffect } from "react";
import styles from "./HomePage.module.scss";

import Carousel from "../../components/Carousel/Carousel";
import { ProductsContext } from "../../context/ProductsContextProvider/ProductsContextProvider";
import { getAllProducts } from "../../services/products";

const HomePage = () => {
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    getAllProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return <main>{products && <Carousel data={products} />}</main>;
};

export default HomePage;
