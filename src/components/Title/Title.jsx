import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Title.styles';

function Title({text}) {
  return (
    <S.H2>{text}</S.H2>
  )
}

Title.propTypes = {
  text:PropTypes.string.isRequired
}

export default Title
