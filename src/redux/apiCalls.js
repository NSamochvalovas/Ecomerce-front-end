import {loginStart, loginSucess} from './userRedux';
import {publicRequest} from '../requoseMethods';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try{
    const res = await publicRequest.post("/auth/login",user)
    dispatch(loginSucess(res.data));
  }catch(err){
    console.log(err)
  }
}

export const registration = async (dispatch, user) => {
  dispatch(loginStart());
  try{
    const res = await publicRequest.post("/auth/register",user)
    dispatch(loginSucess(res.data));
  }catch(err){
    console.log(err)
  }
}