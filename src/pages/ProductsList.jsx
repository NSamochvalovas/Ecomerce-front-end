import React from 'react'
import Filter from '../components/Filter/Filter';
import Products from '../components/Products/Products';

const ProductsList = () => {
  return (
    <>
      <Filter title="Clothes" />
      <Products />
    </>
  )
}


export default ProductsList;
