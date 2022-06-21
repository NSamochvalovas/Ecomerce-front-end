import React, { useState} from 'react';
import * as S from './Slider.styles';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import {sliderItems} from '../../data';

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlecClick = (direction) => {
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    } else {
      setSlideIndex(slideIndex <2 ? slideIndex + 1 : 0)
    } 
  };

  return (
    <S.Container> 
      <S.Arrow direction="left" onClick={() => handlecClick("left")}>
        <ArrowLeftOutlined />
      </S.Arrow>
      <S.Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((item)=>(
          <S.Slide>
            <S.Slider1 style={{backgroundImage:`url(${item.img})`}}>
              <S.InfoContainer>
                <S.H1>{item.title}</S.H1>
                <S.P>{item.desc}</S.P>
                <S.Button>SHOP NOW</S.Button>
              </S.InfoContainer> 
            </S.Slider1>      
          </S.Slide>
        ))}
      </S.Wrapper>
      <S.Arrow direction="right" onClick={() => handlecClick("right")}>
        <ArrowRightOutlined />
      </S.Arrow>
    </S.Container>
  );
};


export default Slider
