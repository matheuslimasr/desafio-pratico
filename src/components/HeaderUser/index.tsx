import React from 'react'
import { Avatar, BaseBrand, BaseOptionsHeader, Brand, ButtonAdd, ButtonSignOut, Header } from './styled'
import { LOGO_URL } from '../../config/config'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useTheme } from '../../context/ThemeProvider';
import { useAuth } from '../../context/AuthContext';

export function HeaderUser() {

  const {theme} = useTheme();
  const {logout} = useAuth();

  const logoutUser = async () => {
    // Implementação para chamada para logout do usuário
    await logout();
  }

  return (
    <Header>
      <BaseBrand>
        <Brand 
          source={{uri: LOGO_URL}}
          resizeMethod="resize"
          resizeMode="contain"
        />
      </BaseBrand>
      <BaseOptionsHeader>
        <ButtonSignOut onPress={logoutUser}><MaterialIcons name="logout" size={24} color={theme.colors.text} /></ButtonSignOut>
        <Avatar
          source={{uri: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" }}
          resizeMode="contain"
        />
      </BaseOptionsHeader>
    </Header>
  )
}