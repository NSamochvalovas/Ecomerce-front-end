import styled from 'styled-components';


export const SingleProduct = styled.div`
  display:flex;
  flex-direction: column;
  max-height:250px;
  margin:5px;
  width: calc(25% - 10px);
  position:relative;
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
  height:100%;
  width:100%;
`;

export const Info = styled.div`

`;

export const Icon = styled.div`
  padding:5px;
  color:#fff;
`;