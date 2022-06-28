import React from 'react';
import * as S from './Cart.styles';
import Button from '../Button/Button';
import { Add, Remove } from '@mui/icons-material';

const  Cart = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Product name</S.Title>
        <S.Top>
          <Button text="Continue Shopping" />
          <S.TopText>Shopping bag(2)</S.TopText>
          <Button text="Check Out" />
        </S.Top>
        <S.Bottom>
          <S.Info>
            <S.Product>
              <S.ProductDetails>
                <S.Image src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <S.Details>
                  <S.ProductName><b>Product: </b>Product name</S.ProductName>
                  <S.ProductId><b>Id: </b>123456</S.ProductId>
                  <S.ProductSize><b>Size: </b>XL</S.ProductSize>
                </S.Details>
              </S.ProductDetails>
              <S.PriceDetails>
                <S.ProductAmountDetails>
                  <Add />
                  <S.ProductAmount>1</S.ProductAmount>
                  <Remove />
                </S.ProductAmountDetails>
                <S.ProductPrice>$20</S.ProductPrice>
              </S.PriceDetails>
            </S.Product>
          </S.Info>
          <S.Summary>
            <S.SummaryTitle>Order Summary</S.SummaryTitle>
            <S.SummaryItem>
              <S.SummaryItemText>Subtotal</S.SummaryItemText>
              <S.SummaryItemPrice>$20</S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryItemText>Shipping Price</S.SummaryItemText>
              <S.SummaryItemPrice>$5</S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryItemText><b>Total</b></S.SummaryItemText>
              <S.SummaryItemPrice><b>$25</b></S.SummaryItemPrice>
            </S.SummaryItem>
            <Button text="Confirm" />
          </S.Summary>
        </S.Bottom>
      </S.Wrapper>
    </S.Container>
  )
}

export default Cart
