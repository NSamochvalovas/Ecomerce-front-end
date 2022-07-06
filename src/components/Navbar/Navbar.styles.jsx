import styled from 'styled-components';
import {mobile} from '../../responsive';
export const Container = styled.div`
  height:60px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex ;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding:"10px 0"})}
`;

export const Left = styled.div`
  flex:1;
  ${mobile({flex:"0"})}
`;

export const Logo = styled.div`
  font-weight: bold;
  ${mobile({display:"none"})}
`;

export const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent:"center", flex:"3"})}
`;

export const MenuItem = styled.a`
  font-size:14px;
  cursor:pointer;
  margin-right:25px;
  ${mobile({fontSize:"12px", marginRight:"5px"})}
`;

export const Button = styled.button`
  background:#000;
  color:#fff;
  border:none;
  padding: 5px 10px;
  border-radius:2px;
  font-size:12px;
`;
 
  