import React from "react";

// import Navigation from "./Components/Navigation.component";

import "./App.scss";
// import ProductSection from "./Components/ProductSection/ProductsSection.component";
import { Route, Routes } from "react-router-dom";

import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProductSection from "./components/navigation/ProductSection/ProductsSection.component";
import Navigation from "./components/navigation/Navigation.component";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductSection />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
