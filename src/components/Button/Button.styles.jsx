import styled from 'styled-components';

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