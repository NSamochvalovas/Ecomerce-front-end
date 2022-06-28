import React from 'react'
import * as S from './NewsLetter.styles'
import Button from '../Button/Button'

const NewsLetter = () => {
  return (
    <S.Container>
      <S.Title>Newsletter</S.Title>
      <S.Description>Get all updates about new clothes</S.Description>
      <S.InputCOntainer>
        <S.Input placeholder="Your email" />
        <Button text="Send" />
      </S.InputCOntainer>
    </S.Container>
  )
}

export default NewsLetter