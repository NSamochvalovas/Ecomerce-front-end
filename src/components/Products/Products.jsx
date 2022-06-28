import React from 'react';
import * as S from './Products.styles';
import { popularProducts } from '../../data';
import Product from '../Product/Product';

const Products = () => {
  return (
    <S.Container>
      {popularProducts.map(item => (
        <Product item={item} key={item.id}/>
      ))}
    </S.Container>    
  )
}

export default Products