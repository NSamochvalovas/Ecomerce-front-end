import React from 'react';
import { categories } from '../../data';
import * as S from './Categories.styles';
import CategoryItem from '../CategoryItem/CategoryItem';
import Title from '../Title/Title';

const Categories = () => {
  return (
    <>
    <Title text="Most Popular Categories"/>
    <S.Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </S.Container>
    </>
  )
}

export default Categories