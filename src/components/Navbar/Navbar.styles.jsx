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
  display:flex; 
  align-items: center;
`;

export const Language = styled.div`
  font-size:14px;
  cursor:pointer;
  ${mobile({display:"none"})}
`

export const SearchContainer = styled.div`
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  margin-left:25px;
  padding:5px;
`;

export const Input = styled.input`
  border:none;
  ${mobile({width:"50px"})}
`;

export const Center = styled.div`
  flex:1;
  ${mobile({flex:"0"})}
`;

export const Logo = styled.div`
  font-weight: bold;
  text-align:center;
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

  