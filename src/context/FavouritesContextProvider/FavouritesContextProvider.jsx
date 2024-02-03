import { createContext, useState } from "react";

export const FavouritesContext = createContext(null);

const FavouritesContextProvider = ({ children }) => {
  const [favouriteProducts, setFavouriteProducts] = useState(null);

  return (
    <FavouritesContext.Provider
      value={{ favouriteProducts, setFavouriteProducts }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
