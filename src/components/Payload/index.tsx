import { ActivityIndicator } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeProvider'
import { Container, Title } from './styled';

export default function PayLoad() {

  const {theme} = useTheme();

  return (
    <Container>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Title>Carregando...</Title>
    </Container>
  )
}