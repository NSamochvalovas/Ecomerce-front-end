import React from 'react';
import * as S from './Cart.styles';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../../redux/cartRedux';
import { Link } from 'react-router-dom';

const  Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart);

  const handleDelete = () => {
    dispatch(removeCart());
  }

  const hendleConfirm = () =>{
    if (cart.total > 5){
      alert('Thank you for buying');
      dispatch(removeCart());
    } else {
      alert('cart is empty!!')
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Top>
          <Link to="/products" style={{ textDecoration: 'none', color: '#fff' }}><S.Button>Continue shopping</S.Button></Link>
          <S.Button onClick={handleDelete}>Delete cart</S.Button>
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
              <S.Button onClick={hendleConfirm}>Confirm</S.Button>
          </S.Summary>
        </S.Bottom>
      </S.Wrapper>
    </S.Container>
  )
}

export default Cart
