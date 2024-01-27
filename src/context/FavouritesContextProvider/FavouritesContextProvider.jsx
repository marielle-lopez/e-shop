import { createContext, useState } from "react";

export const FavouritesContext = createContext(null);

const FavouritesContextProvider = ({ children }) => {
  const [favouritedProducts, setFavouritedProducts] = useState(null);

  return (
    <FavouritesContext.Provider
      value={{ favouritedProducts, setFavouritedProducts }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
