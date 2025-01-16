import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';

// Tipagem para a rota de autenticação
type AuthRoutes = {
  SignIn: undefined;
};

// Tipagem para navegação
export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

// Criação do Stack Navigator
const Stack = createNativeStackNavigator<AuthRoutes>();

// Componente de rotas de autenticação
export function AuthRoutes() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}