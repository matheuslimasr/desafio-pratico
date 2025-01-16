import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Routes } from "./src/routes";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium
} from '@expo-google-fonts/poppins';
import { ThemeProvider } from './src/context/ThemeProvider';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
 
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium
  });

  if (!fontsLoaded) {
    return null
  }

  return (
  <AuthProvider>
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <StatusBar style="dark" translucent />
          <Routes />
        </SafeAreaProvider>
      </GestureHandlerRootView>
      
    </ThemeProvider>
  </AuthProvider>
  );
}