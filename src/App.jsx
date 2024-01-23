import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductsContextProvider from "./context/ProductsContextProvider/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider/CartContextProvider";

import Header from "./containers/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Footer from "./components/Footer/Footer";
import ReturnsPage from "./pages/ReturnsPage/ReturnsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage/TermsOfServicePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  return (
    <>
      <CartContextProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/favourites" element={<FavouritesPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/returns" element={<ReturnsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route
                path="/terms-of-service"
                element={<TermsOfServicePage />}
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ProductsContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
