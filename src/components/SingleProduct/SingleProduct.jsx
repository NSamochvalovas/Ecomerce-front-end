import { Add, Remove } from '@mui/icons-material';
import React, {useState, useEffect } from 'react';
import * as S from './SingleProduct.styles';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requoseMethods';

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.ImgContainer>
          <S.Image src={product.image}></S.Image>
        </S.ImgContainer>
        <S.InfoContainer>
          <S.Title>{product.title}</S.Title>
          <S.Description>{product.description}</S.Description>
          <S.Price>$ {product.price}</S.Price>
          <S.AddContainer>
            <S.AmounContainer>
              <Remove />
              <S.Amount>1</S.Amount>
              <Add />
            </S.AmounContainer>
            <Button text="Add" />
          </S.AddContainer>
        </S.InfoContainer>
      </S.Wrapper>
    </S.Container>
  )
}

export default SingleProduct