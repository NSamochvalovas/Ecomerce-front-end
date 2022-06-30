import React from 'react';
import * as S from './CategoryItems.styles';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const CategoryItem = ( {item} ) => {
  return (
      <S.Container>
        <S.Image src={item.img}/>
        <S.Info>
          <h2>{item.title}</h2>
          <Link to={`/products/${item.category}`}>
            <Button text="Wiew Category" />
          </Link>
        </S.Info>
      </S.Container>
  )
}


export default CategoryItem