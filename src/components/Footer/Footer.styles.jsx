import styled from 'styled-components';
import {mobile} from '../../responsive';

export const Container = styled.div`
  display:flex;
  ${mobile({flexDirection:"column"})}
`;

export const Left = styled.div`
  flex:1;
  display:flex;
  flex-direction: column;
  padding:20px;
`;

export const Logo = styled.h3`
`;

export const Description = styled.p`
  margin-top:0px;
`;

export const SocialContainer = styled.div`
  display:flex;
`;

export const Icon = styled.div`
  width: 40px;
  height:40px;
  border-radius: 50%; 
  color:#fff;
  background-color: #${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:10px;
`;

export const Center = styled.div`
  flex:1;
  padding:20px;
  ${mobile({display:"none"})}
`;

export const Title = styled.h3`

`;

export const List = styled.ul`
  margin:0;
  padding:0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const Right = styled.div`
  flex:1;
  padding:20px;
`;

export const ContactItem = styled.div`
  margin-bottom:10px;
  display:flex;
  align-items: center;
`;

