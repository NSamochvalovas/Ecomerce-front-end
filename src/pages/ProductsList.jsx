import React from 'react'
import Filter from '../components/Filter/Filter';
import Products from '../components/Products/Products';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const ProductsList = () => {
  return (
    <>
      <Filter title="Clothes" />
      <Products />
      <NewsLetter />
    </>
  )
}


export default ProductsList;
