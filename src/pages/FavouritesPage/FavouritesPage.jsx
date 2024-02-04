import styles from "./FavouritesPage.module.scss";
import { useContext, useEffect, useState } from "react";
import { FavouritesContext } from "../../context/FavouritesContextProvider/FavouritesContextProvider";
import PageHeading from "../../components/PageHeading/PageHeading";
import PaddingWrapper from "../../containers/PaddingWrapper/PaddingWrapper";
import ProductsList from "../../containers/ProductsList/ProductsList";
import { getFilteredProducts } from "../../../services/products";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const FavouritesPage = () => {
  const { favouriteProducts, setFavouriteProducts } =
    useContext(FavouritesContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFilteredProducts("isFavourite", true).then((response) => {
      setFavouriteProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    <PaddingWrapper>
      <main>
        <PageHeading>Favourites</PageHeading>
        <div className={styles.wrapper}>
          {loading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </div>

        {favouriteProducts && favouriteProducts.length === 0 && !loading && (
          <p>You haven't favourited a product yet!</p>
        )}

        {favouriteProducts && favouriteProducts.length !== 0 && !loading && (
          <ProductsList products={favouriteProducts} />
        )}
      </main>
    </PaddingWrapper>
  );
};

export default FavouritesPage;
