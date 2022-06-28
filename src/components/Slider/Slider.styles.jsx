import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:90vh;
  display:flex;
  position:relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  cursor:pointer;
  opacity:0.5;
  background-color: #f9f5f5;
  border-radius: 50%;
  display:flex;
  align-items: center;
  justify-content: center;
  position:absolute;
  top:0;
  bottom:0;
  margin:auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  z-index: 2;
`;

export const Wrapper = styled.div`
  height:100%;
  display:flex;
  transition: all 1s ease;
  transform:translateX(${props=>props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width:100vw;
  height:90vh;
  display:flex;
  align-items: center;
`;

export const Slider1 = styled.div`
    width:100%;
    height:90vh;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
`;


export const InfoContainer = styled.div`
  padding: 50px;
  float:right;
`;

export const H1 = styled.h1`
  font-size:50px;
  margin-bottom:0;
`

export const P = styled.p`
  font-size:22px;
  margin-top:10px;
`;