import { useContext } from "react";
import { FavouritesContext } from "../../context/FavouritesContextProvider/FavouritesContextProvider";
import PageHeading from "../../components/PageHeading/PageHeading";
import PaddingWrapper from "../../containers/PaddingWrapper/PaddingWrapper";

const FavouritesPage = () => {
  const { favouritedProducts, setFavouritedProducts } =
    useContext(FavouritesContext);

  return (
    <PaddingWrapper>
      <main>
        <PageHeading>Favourites</PageHeading>
        
      </main>
    </PaddingWrapper>
  );
};

export default FavouritesPage;
