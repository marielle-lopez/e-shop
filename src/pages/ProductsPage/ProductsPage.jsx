import { useContext, useEffect } from "react";
import ProductsList from "../../containers/ProductsList/ProductsList";
import { ProductsContext } from "../../context/ProductsContextProvider/ProductsContextProvider";
import { getAllProducts } from "../../services/products";

const ProductsPage = () => {
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    getAllProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <main>
      <h1>Products</h1>
      {products && <ProductsList products={products} />}
    </main>
  );
};

export default ProductsPage;
