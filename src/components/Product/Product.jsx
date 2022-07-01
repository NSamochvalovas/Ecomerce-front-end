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
        <S.Info>
            <S.Icon>
              <ShoppingCartCheckoutOutlined />
            </S.Icon>
          </S.Info>
          <S.Info>
          <S.Icon>
            <Link to={`/product/${item._id}`}>
              <SearchOffOutlined />
            </Link>
          </S.Icon>
          </S.Info>
          <S.Info>
            <S.Icon>
              <FavoriteBorderOutlined />
            </S.Icon>
          </S.Info>
      </S.InfoBLock>
    </S.SingleProduct>
  )
}

Product.propTypes = {
  item: PropTypes.object,
}
export default Product