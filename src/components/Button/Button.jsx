import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Button.styles'

const Button = ({text}) => {
  return (
    <S.Button>{text}</S.Button>
  )
}

Button.propTypes = {
  text:PropTypes.string.isRequired,
}

export default Button
