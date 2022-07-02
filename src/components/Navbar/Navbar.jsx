import React from 'react';
import * as S from './Navbar.styles';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

const Navbar = () => {

  const quantity = useSelector(state=> state.cart.quantity);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Left>
          <S.Language>EN</S.Language> 
          <S.SearchContainer>
            <S.Input />
            <Search style={{color:"gray", fontSize:16}}/>
          </S.SearchContainer> 
        </S.Left>
        <S.Center>
          <S.Logo>Logo.</S.Logo>
        </S.Center>
        <S.Right>
          <S.MenuItem><Link to="/">Home</Link></S.MenuItem>
          <S.MenuItem><Link to="/register">Register</Link></S.MenuItem>
          <S.MenuItem><Link to="/login">Log in</Link></S.MenuItem>
          <S.MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
          </Badge>
            </Link>
          </S.MenuItem>
        </S.Right>
      </S.Wrapper>
    </S.Container>
  );
};

Navbar.propTypes = {}

export default Navbar
