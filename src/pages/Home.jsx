import React from 'react';
import Slider from '../components/Slider/Slider';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import Title from '../components/Title/Title';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AlingButton = styled.div`
  width:100%;
  display:flex;
  justify-content: center; 
`;

const Button = styled.button`
  background: #000;
  border:none;
  border-radius: 5px;
  color:#fff;
  padding:10px 20px;
  margin:auto;
  text-align:center;
  &:hover{
    color:#000;
    background: #fff;
    font-weight:bold;
    transition: 0.5s ease;
  }
`;


const Home = () => {
  return (
    <>
      <Slider />
      <Title text="Most Popular Categories" />
      <Categories />  
      <Title text="Most Popular Products" />
      <Products />
      <AlingButton>
        <Link to="/products" style={{ textDecoration: 'none', color: '#fff' }}><Button>Wiew all</Button></Link>
      </AlingButton>
    </>
  )
  
};

export default Home;
