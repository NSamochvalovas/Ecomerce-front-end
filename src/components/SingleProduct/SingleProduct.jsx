import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import * as S from './SingleProduct.styles';
import Button from '../Button/Button';

const SingleProduct = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ImgContainer>
          <S.Image src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></S.Image>
        </S.ImgContainer>
        <S.InfoContainer>
          <S.Title>This is title</S.Title>
          <S.Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</S.Description>
          <S.Price>$ 20</S.Price>
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