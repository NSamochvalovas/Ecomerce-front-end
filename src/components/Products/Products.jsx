import React from 'react';
import * as S from './Products.styles';
import { popularProducts } from '../../data';
import Product from '../Product/Product';
import Title from '../Title/Title';

function Products() {
  return (
    <>
      <Title text="Most Popular Products" />
      <S.Container>
        {popularProducts.map(item => (
          <Product item={item} key={item.id}/>
        ))}
      </S.Container>    
    </>

  )
}

export default Products