import React from "react";
import Slider from "../components/Slider/Slider";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Title from "../components/Title/Title"
import NewsLetter from "../components/NewsLetter/NewsLetter"

const Home = () => {
  return (
    <>
      <Slider />
      <Title text="Most Popular Categories" />
      <Categories />  
      <Title text="Most Popular Products" />
      <Products />
      <NewsLetter />
    </>
  )
  
};

export default Home;
