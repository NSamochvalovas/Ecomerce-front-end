import React, { useState } from 'react'
import * as S from './RegisterForm.styles'
import Title from '../Title/Title'
import Button from '../Button/Button'
import {login} from '../../redux/apiCalls'

const RegisterForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRep, setPasswordRep] = useState();

  return (
    <S.Container>
      <S.Form>
        <Title text="Registration" />
        <S.Input placeholder="email" />
        <S.Input placeholder="password" />
        <S.Input placeholder="confirm password" />
        <Button type="submit" text="Submit" />
      </S.Form>
    </S.Container>
  )
}

export default RegisterForm