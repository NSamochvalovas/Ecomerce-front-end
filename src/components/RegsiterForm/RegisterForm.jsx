import React, { useState } from 'react'
import * as S from './RegisterForm.styles'
import Title from '../Title/Title'
import {registration} from '../../redux/apiCalls'
import { useDispatch } from 'react-redux/es/exports';


const RegisterForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  
const handelReg = (e) => {
  e.preventDefault();
  registration(dispatch, { email, password })
}

  return (
    <S.Container>
      <S.Form>
        <Title text="Registration" />
        <S.Input 
          placeholder="email" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.Input 
          placeholder="password" 
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <S.Button onClick={handelReg}>Regsiter</S.Button>
      </S.Form>
    </S.Container>
  )
}

export default RegisterForm