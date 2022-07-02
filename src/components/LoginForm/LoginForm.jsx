import React, {useState} from 'react'
import * as S from './LoginForm.styles'
import Title from '../Title/Title'
import { login } from '../../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux/es/exports';


const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const handeLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, password })
  }
  return (
    <S.Container>
      <S.Form>
        <Title text="Login" />
        <S.Input 
          placeholder="email" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.Input 
          placeholder="password" 
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.Button onClick={handeLogin} disabled={isFetching}>Log in</S.Button>
      </S.Form>
    </S.Container>
  )
}

export default LoginForm