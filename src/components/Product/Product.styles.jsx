import styled from 'styled-components';
import {mobile, tablet} from '../../responsive';

export const SingleProduct = styled.div`
  display:flex;
  flex-direction: column;
  max-height:300px;
  margin:5px;
  width: calc(25% - 12px);
  position:relative;
  border: 1px solid #ddd;
  ${tablet({width:"calc(33% - 12px)"})}
  ${mobile({width:"calc(50% - 12px)"})}
`;

export const InfoBLock = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  position:absolute;
  height:100%;
  width:100%;
  top:0;
  left:0;
  opacity:0;
  &:hover{
    background:rgba(0,0,0, 0.6);
    opacity:1;
    transition:0.5s;
  }
`;

export const Image = styled.img`
  max-height:250px;
  min-height:250px;
  width:100%;
`;

export const Icon = styled.div`
  padding:5px;
`;

export const SizePriceInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height:50px;
  border-top: 1px solid #ddd;
`;

export const Price = styled.p`
  color:#000;
  font-weight:bold;
  padding:5px;
`;

export const Size = styled.p`
  color:#000;
  font-weight:bold;
  padding:5px;
`;