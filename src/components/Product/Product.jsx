import { FavoriteBorderOutlined, SearchOffOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import React from 'react';
import * as S from './Product.styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Product( {item} ) {
  return (
    <S.SingleProduct>
      <S.Image src={item.image} />
      <S.InfoBLock>
        <S.Icon>
          <Link to={`/product/${item._id}`} style={{ textDecoration: 'none', color: '#fff'}}>
            <SearchOffOutlined style={{height:'2em', width: '2em'}}/>
          </Link>
        </S.Icon>
      </S.InfoBLock>

      <S.SizePriceInfo>
            <S.Price>Price: {item.price}$</S.Price>
            <S.Size>Sizes: {item.size}</S.Size>
      </S.SizePriceInfo>
    </S.SingleProduct>
  )
}

Product.propTypes = {
  item: PropTypes.object,
}
export default Product