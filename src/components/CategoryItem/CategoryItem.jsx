import React from 'react';
import * as S from './CategoryItems.styles';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const CategoryItem = ( {item} ) => {
  return (
      <S.Container>
        <S.Image src={item.img}/>
        <S.Info>
          <h2>{item.title}</h2>
          <Button text="Wiew Category" />
        </S.Info>
      </S.Container>
  )
}

CategoryItem.propTypes = {
  item: PropTypes.node,
}

export default CategoryItem