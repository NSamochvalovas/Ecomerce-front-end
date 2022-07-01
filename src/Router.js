import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";

import CartPage from "./pages/CartPage";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterPage from "./pages/RegisterPage";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Router = () => {
  const user = true;
  const Child = () => {
    const { category } = useParams();
  }
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category"  element={<ProductsList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/register" element={
          user? <Navigate to="/" /> : <RegisterPage />} />
        <Route exact path="/login" element={
          user? <Navigate to="/" /> : <LoginForm />}/>
        <Route exact path="/cart" element={<CartPage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default Router;
