import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Filter.styles';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../Products/Products';


const  Filter = ({title}) => {
  
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");


  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
  });
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.FilterContainer>
        <S.Filter>
          <S.FilterText>Filter Products:</S.FilterText>
          <S.Select name="size" onChange={handleFilters}>
            <S.Option>Size</S.Option>
            <S.Option>S</S.Option>
            <S.Option>M</S.Option>
            <S.Option>L</S.Option>
            <S.Option>XL</S.Option>
          </S.Select>
        </S.Filter>
        <S.Filter>
          <S.FilterText>Sort Products:</S.FilterText>
          <S.Select onChange={e=>setSort(e.target.value)}>
            <S.Option value="newst">Newst</S.Option>
            <S.Option value="asc">Lowest Price</S.Option>
            <S.Option value="dec">Highest Price</S.Option>
          </S.Select>
        </S.Filter>
      </S.FilterContainer>
      <Products category={category} filters={filters} sort={sort}/>
    </S.Container>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Filter
