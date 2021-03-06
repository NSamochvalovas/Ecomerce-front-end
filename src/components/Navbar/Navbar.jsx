import React from 'react';
import * as S from './Navbar.styles';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { logOut } from '../../redux/userRedux';
import { removeCart } from '../../redux/cartRedux';

const Navbar = () => {
  const user = useSelector((state) => state.user.curentUser);
  const quantity = useSelector(state=> state.cart.quantity);
  const dispatch = useDispatch()

  const handleLogout = () =>{
    if (!user) {
      alert('You are not loged in!!!!!')
    } else {
      dispatch(logOut());
      dispatch(removeCart());
      alert('You have log out')
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Left>
          <S.Logo>Logo.</S.Logo>
        </S.Left>
        <S.Right>
          <S.MenuItem><Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Home</Link></S.MenuItem>
          <S.MenuItem><Link to="/register" style={{ textDecoration: 'none', color: '#000' }}>Register</Link></S.MenuItem>
          <S.MenuItem><Link to="/login" style={{ textDecoration: 'none', color: '#000' }}>Log in</Link></S.MenuItem>
          <S.MenuItem><Link to="/add" style={{ textDecoration: 'none', color: '#000' }}>Add</Link></S.MenuItem>
          <S.MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
              </Badge>
            </Link>
          </S.MenuItem>
          <S.Button onClick={handleLogout}>Log Out</S.Button>
        </S.Right>
      </S.Wrapper>
    </S.Container>
  );
};

Navbar.propTypes = {}

export default Navbar
