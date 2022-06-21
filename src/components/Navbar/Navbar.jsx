import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Navbar.styles';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';


function Navbar(props) {
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
          <S.MenuItem>Register</S.MenuItem>
          <S.MenuItem>Sig In</S.MenuItem>
          <S.MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
          </S.MenuItem>
        </S.Right>
      </S.Wrapper>
    </S.Container>
  );
};

Navbar.propTypes = {}

export default Navbar
