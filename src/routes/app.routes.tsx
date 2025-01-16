import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Home, { MarkType } from '../screens/Home';
import Model from '../screens/Model';

// Tipagem para as rotas do aplicativo
type AppRoutes = {
  Home: undefined;
  Model: MarkType;
};

// Tipagem para a navegação
export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

// Criação do Stack Navigator
const Stack = createNativeStackNavigator<AppRoutes>();

// Componente de rotas do aplicativo
export function AppRoutes() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Model" component={Model} options={{
        headerShown: true,
        title: "Modelos Disponíveis"
      }} />
    </Stack.Navigator>
  );
}