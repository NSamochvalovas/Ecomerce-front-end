import React from 'react'
import * as S from './RegisterForm.styles'
import Title from '../Title/Title'
import Button from '../Button/Button'

const RegisterForm = () => {
  return (
    <S.Container>
      <S.Form>
        <Title text="Registration" />
        <S.Input placeholder="name" />
        <S.Input placeholder="email" />
        <S.Input placeholder="password" />
        <S.Input placeholder="confirm password" />
        <Button type="submit" text="Submit" />
      </S.Form>
    </S.Container>
  )
}

export default RegisterForm