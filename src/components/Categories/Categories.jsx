import React from 'react';
import { categories } from '../../data';
import * as S from './Categories.styles';
import CategoryItem from '../CategoryItem/CategoryItem';

const Categories = () => {
  return (
    <S.Container>
      {categories.map((item) => (
        <CategoryItem item={item}/>
      ))}
    </S.Container>
  )
}

export default Categories