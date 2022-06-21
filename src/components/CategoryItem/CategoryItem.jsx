import React from 'react';
import * as S from './CategoryItems.styles';
import PropTypes from 'prop-types'

const CategoryItem = ( {item} ) => {
  return (
      <S.Container>
        <S.Image src={item.img}/>
        <S.Info>
          <h2>{item.title}</h2>
          <S.Button>Shop now</S.Button>
        </S.Info>
      </S.Container>
  )
}

CategoryItem.propTypes = {
  item: PropTypes.node,
}

export default CategoryItem