import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../../services/products";

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
