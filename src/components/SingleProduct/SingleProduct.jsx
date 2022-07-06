import { Add, Remove } from '@mui/icons-material';
import React, {useState, useEffect } from 'react';
import * as S from './SingleProduct.styles';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requoseMethods';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux/es/exports'; 


const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("products/find/" + id);
        setProduct(res.data);
      } catch (err){
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handelQuantity = (type) =>{
    if(type === "decrease") {
      quantity > 1 && setQuantity(quantity-1)
    } else if (type === "increase") {
      setQuantity(quantity+1)
    }
  }
  
  const handleClick = () => {
    
    dispatch(
      addProduct({ ...product,  quantity })
    );

  };
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
              <Remove onClick={() => handelQuantity("decrease")} />
              <S.Amount>{quantity}</S.Amount>
              <Add onClick={() => handelQuantity("increase")} />
            </S.AmounContainer>
            <S.Button onClick={handleClick}>Add</S.Button>
          </S.AddContainer>
        </S.InfoContainer>
      </S.Wrapper>
    </S.Container>
  )
}

export default SingleProduct