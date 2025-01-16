import { TouchableOpacityProps } from 'react-native'
import React from 'react'
import { Container, TitleButton } from './styled';

interface ButtonProp extends TouchableOpacityProps {
  title: string;
}

export default function Button({title, ...rest}: ButtonProp) {
  return (
    <Container {...rest}>
      <TitleButton>{title}</TitleButton>
    </Container>
  )
}