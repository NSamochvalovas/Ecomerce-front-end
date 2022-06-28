import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Filter.styles';

const  Filter = ({title}) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.FilterContainer>
        <S.Filter>
          <S.FilterText>Filter Products:</S.FilterText>
          <S.Select>
            <S.Option disabled selected>Color</S.Option>
            <S.Option>White</S.Option>
            <S.Option>Black</S.Option>
            <S.Option>Blue</S.Option>
            <S.Option>Yellow</S.Option>
          </S.Select>
          <S.Select>
            <S.Option disabled selected>Size</S.Option>
            <S.Option>S</S.Option>
            <S.Option>M</S.Option>
            <S.Option>L</S.Option>
            <S.Option>XL</S.Option>
          </S.Select>
        </S.Filter>
        <S.Filter>
          <S.FilterText>Sort Products:</S.FilterText>
          <S.Select>
            <S.Option disabled selected>Newst</S.Option>
            <S.Option>Lowest Price</S.Option>
            <S.Option>Highest Price</S.Option>
          </S.Select>
        </S.Filter>
      </S.FilterContainer>
    </S.Container>
  )
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Filter
