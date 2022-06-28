import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Wrapper = styled.div`
  padding:50px;
  displaY:flex;
`;

export const ImgContainer = styled.div`
  flex:1;
`;

export const Image = styled.img`
  width:100%;
  height:50vh;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  flex:1;
  padding: 0px 50px;
`;

export const Title = styled.h3`
  font-weight:600;
`;

export const Description = styled.p`
  margin: 20px 0px;
`;

export const Price = styled.span`
  font-weight:600;
  font-size:22px;
`;

export const AddContainer = styled.div`
  margin-top:10px;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

export const AmounContainer = styled.div`
  display:flex;
  align-items: center;
  padding-top:10px;
  padding-right:10px;
`;

export const Amount = styled.div`
  width:30px;
  height:30px;
  border-radius:10px;
  border: 1px solid #ddd;
  display:flex;
  align-items: center;
  justify-content: center;
`;