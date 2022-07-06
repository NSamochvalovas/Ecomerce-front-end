import React from 'react';
import * as S from './Cart.styles';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';

const  Cart = () => {
  const cart = useSelector(state=>state.cart)
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Product name</S.Title>
        <S.Top>
          <Button text="Continue Shopping" />
          <S.TopText>Shopping bag(2)</S.TopText>
          <Button text="Delete cart" />
        </S.Top>
        <S.Bottom>
          <S.Info>
          {cart.products.map((product) => (
               <S.Product>
               <S.ProductDetails>
                 <S.Image src={product.image} />
                 <S.Details>
                   <S.ProductName><b>Product: </b>{product.title}</S.ProductName>
                   <S.ProductId><b>Id: </b>{product._id}</S.ProductId>
                   <S.ProductAmount><b>Quantity: </b>{product.quantity}</S.ProductAmount>
                   <S.ProductPrice><b>Price: </b>$ {product.price * product.quantity}</S.ProductPrice>
                 </S.Details>
               </S.ProductDetails>
             </S.Product>
            ))}
           
          </S.Info>
          <S.Summary>
            <S.SummaryTitle>Order Summary</S.SummaryTitle>
            <S.SummaryItem>
              <S.SummaryItemText>Subtotal</S.SummaryItemText>
              <S.SummaryItemPrice>$ {cart.total}</S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryItemText>Shipping Price</S.SummaryItemText>
              <S.SummaryItemPrice>$5</S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryItemText><b>Total</b></S.SummaryItemText>
              <S.SummaryItemPrice><b>$ {cart.total + 5}</b></S.SummaryItemPrice>
            </S.SummaryItem>
            <Button text="Confirm" />
          </S.Summary>
        </S.Bottom>
      </S.Wrapper>
    </S.Container>
  )
}

export default Cart
