import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../context/AuthContext'

export function Routes() {
  const {isLoggedIn} = useAuth();

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}