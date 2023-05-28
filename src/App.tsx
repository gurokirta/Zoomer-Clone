import React from "react";

import Navigation from "./Components/Navigation.component";

import "./App.scss";
import ProductSection from "./Components/ProductSection/ProductsSection.component";
import { Route, Routes } from "react-router-dom";
import CarouselComponent from "./Components/Carousel/CarouselComponent";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <Navigation />
      <CarouselComponent />
      <Routes>
        <Route path="/" element={<ProductSection />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
