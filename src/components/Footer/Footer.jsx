import { Facebook, Instagram, Room, Phone, MailOutline } from '@mui/icons-material';
import React from 'react';
import * as S from './Footer.styles';

function Footer() {
  return (
    <S.Container>
      <S.Left>
        <S.Logo>LOGO</S.Logo>
        <S.Description>
          This is clothes eshop. You can find here any clothes you want. 
        </S.Description>
        <S.SocialContainer>
          <S.Icon color="3B5999">
            <Facebook />
          </S.Icon>
          <S.Icon color="E4405F">
            <Instagram />
          </S.Icon>
        </S.SocialContainer>
      </S.Left>
      <S.Center>
        <S.Title>Eshop Links</S.Title>
        <S.List>
          <S.ListItem>Home</S.ListItem>
          <S.ListItem>Cart</S.ListItem>
          <S.ListItem>Man Fashion</S.ListItem>
          <S.ListItem>Woman Fashion</S.ListItem>
        </S.List>
      </S.Center>
      <S.Right>
        <S.Title>Contacts</S.Title>
        <S.ContactItem>
          <Room />Vilnius Lithuania
        </S.ContactItem>
        <S.ContactItem>
          <Phone />+123 4567 89
        </S.ContactItem>
        <S.ContactItem>
          <MailOutline /> Contacts@gmail.com
        </S.ContactItem>
      </S.Right>
    </S.Container>
  )
}

export default Footer