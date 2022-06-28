import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm/LoginForm";
import RegisterPage from "./pages/RegisterPage";
import Product from "./pages/Product";
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
        <Route exact path="/products" element={<ProductsList />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginForm />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default Router;
