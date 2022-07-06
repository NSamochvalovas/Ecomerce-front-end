import styled from 'styled-components';
import {mobile, tablet} from '../../responsive';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
  padding:20px;
  ${mobile({padding:"10px"})}
`;

export const Title = styled.h3`
  font-weight: 600;
  text-align: center;
`;

export const Top = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;
  ${mobile({flexDirection:"column", marginBottom:"20px"})}
`;

export const TopText = styled.div`
  text-decoration: underline;
  ${mobile({padding:"10px 0px"})}
`;
export const Bottom = styled.div`
  display:flex;
  justify-content: space-between;
  ${tablet({flexDirection:"column"})}
`;

export const Info = styled.div`
  flex:3;
`;

export const Product = styled.div`
  display:flex;
  justify-content: space-between;
`;

export const ProductDetails = styled.div`
  flex:2;
  display:flex;
`;

export const Image = styled.img`
  width:30%;
  ${tablet({width:"50%"})}
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding:20px;
`;

export const ProductName = styled.span`
  padding:10px;
`;

export const ProductId = styled.span`
  padding:10px;
`;

export const ProductAmount = styled.span`
  padding:10px;
`;

export const ProductPrice = styled.span`
  padding:10px;
`;

export const PriceDetails = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountDetails = styled.div`
  display: flex;
  align-items: center;
`;



export const Summary = styled.div`
  flex:1;
  border: 1px solid #eee;
  border-radius:5px;
  padding:10px;
  max-height:200px;
  ${tablet({marginTop:"10px"})}
`;

export const SummaryTitle = styled.h4`
  margin-top:0px;
  margin-bottom: 10px;
`;

export const SummaryItem = styled.div`
  margin-bottom:15px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: #000;
  border:none;
  border-radius: 5px;
  color:#fff;
  padding:10px 20px;
  &:hover{
    color:#000 !important;
    background: #cdcccc;
    font-weight:bold;
    transition: 0.5s ease;
  }
  ${mobile({marginBottom:"5px"})}
`;

export const Link = styled.a`
  text-decoration:none;
`;
  


export const SummaryItemText = styled.div``;

export const SummaryItemPrice = styled.div``;
