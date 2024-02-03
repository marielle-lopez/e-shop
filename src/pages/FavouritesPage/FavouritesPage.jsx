import { useContext, useEffect } from "react";
import { FavouritesContext } from "../../context/FavouritesContextProvider/FavouritesContextProvider";
import PageHeading from "../../components/PageHeading/PageHeading";
import PaddingWrapper from "../../containers/PaddingWrapper/PaddingWrapper";
import ProductsList from "../../containers/ProductsList/ProductsList";
import { getFilteredProducts } from "../../../services/products";

const FavouritesPage = () => {
  const { favouriteProducts, setFavouriteProducts } =
    useContext(FavouritesContext);

  useEffect(() => {
    getFilteredProducts("isFavourite", true).then((response) =>
      setFavouriteProducts(response)
    );
  }, []);

  return (
    <PaddingWrapper>
      <main>
        <PageHeading>Favourites</PageHeading>
        {favouriteProducts && <ProductsList products={favouriteProducts} />}
      </main>
    </PaddingWrapper>
  );
};

export default FavouritesPage;
