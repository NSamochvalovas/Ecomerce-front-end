import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  min-height:100vh;
  background-image: url("https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size:cover;
  background-repeat:no-repeat;
  background-position: center;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  padding:30px;
  padding-top:10px;
  background:rgba(255,255,255,0.7);
  display:flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const Input = styled.input`
  margin-bottom:5px;
  padding:10px;
  border-radius: 5px;
  border:none;
  background:rgba(255,255,255,0.7);
`;

export const Button = styled.button`
  background: #000;
  border:none;
  border-radius: 5px;
  color:#fff;
  padding:10px 20px;
  &:hover{
    color:#000;
    background: #fff;
    font-weight:bold;
    transition: 0.5s ease;
  }
`;