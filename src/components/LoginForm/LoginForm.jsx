import React from 'react'
import * as S from './LoginForm.styles'
import Title from '../Title/Title'
import Button from '../Button/Button'

const LoginForm = () => {
  return (
    <S.Container>
      <S.Form>
        <Title text="Login" />
        <S.Input placeholder="email" />
        <S.Input placeholder="password" />
        <Button type="submit" text="Submit" />
      </S.Form>
    </S.Container>
  )
}

export default LoginForm