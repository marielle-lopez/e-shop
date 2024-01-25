import { useContext, useEffect } from "react";
import ProductsList from "../../containers/ProductsList/ProductsList";
import { ProductsContext } from "../../context/ProductsContextProvider/ProductsContextProvider";
import { getAllProducts } from "/services/products";
import PaddingWrapper from "../../containers/PaddingWrapper/PaddingWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";

const ProductsPage = () => {
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    getAllProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <PaddingWrapper>
      <main>
        <PageHeading>Products</PageHeading>
        {products && <ProductsList products={products} />}
      </main>
    </PaddingWrapper>
  );
};

export default ProductsPage;
