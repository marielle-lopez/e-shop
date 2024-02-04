import { useContext, useEffect, useState } from "react";
import ProductsList from "../../containers/ProductsList/ProductsList";
import { ProductsContext } from "../../context/ProductsContextProvider/ProductsContextProvider";
import { getAllProducts } from "/services/products";
import PaddingWrapper from "../../containers/PaddingWrapper/PaddingWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ProductsPage = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllProducts().then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    <PaddingWrapper>
      <main>
        <PageHeading>Products</PageHeading>
        {loading && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
        {products && !loading && <ProductsList products={products} />}
      </main>
    </PaddingWrapper>
  );
};

export default ProductsPage;
