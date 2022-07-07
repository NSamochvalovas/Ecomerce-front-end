import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import CartPage from './pages/CartPage';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterPage from './pages/RegisterPage';
import Product from './pages/Product';
import ProductsList from './pages/ProductsList';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Add from './pages/Add';

const Router = () => {
const user = useSelector((state) => state.user.curentUser);

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products"  element={
          !user? <Navigate to="/login" /> : <ProductsList />} />
        <Route path="/products/:category"  element={<ProductsList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/register" element={
          user? <Navigate to="/" /> : <RegisterPage />} />
        <Route exact path="/login" element={
          user? <Navigate to="/" /> : <LoginForm />}/>
        <Route exact path="/add" element={
          !user? <Navigate to="/login" /> : <Add /> } />
        <Route exact path="/cart" element={ <CartPage /> } />
        
      </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default Router;
