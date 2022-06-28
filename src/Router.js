import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductsList from "./pages/ProductsList";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Products" element={<ProductsList />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default Router;
