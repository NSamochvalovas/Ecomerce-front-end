import styled from 'styled-components';

export const Container = styled.div`
  flex:1;
  margin: 3px;
  height:60vh;
  position:relative;
`;

export const Image = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;