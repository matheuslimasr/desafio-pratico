import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { loginRequest } from '../api/login';
import { Alert } from 'react-native';

export type User = {
  id?: string;
  name?: string;
  token?: string;
  user?: string; 
  password?: string;
}

interface AuthContextData {
  user: User;
  isLoggedIn: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    token: '',
    user: '',
    password: '',
  });
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Carregar informações do usuário do AsyncStorage ao inicializar o app
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const parsedUserData: User = JSON.parse(userData);
          setUser(parsedUserData);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Erro ao carregar dados do usuário', error);
      }
    };

    loadUserData();
  }, []);

  // Função para login
  const login = async (user: string, password: string) => {
    setLoading(true);
    try {
      await loginRequest(user, password).then(async (response) => {

        await AsyncStorage.setItem('user', JSON.stringify(response.user));
        setUser(response.user);
        setIsLoggedIn(true);

      }).finally(() => {
        setLoading(false);
      })
    } catch (error) {
      if(error){
        Alert.alert('Aviso', 'Usuário e/ou senha inválido(s).');
      }
    } finally {
      setLoading(false);
    }
  };

  // Função para logout
  const logout = async () => {
    try {
      // Remover as informações do AsyncStorage
      await AsyncStorage.removeItem('user');
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Erro ao realizar logout', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, loading ,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto de autenticação
export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};