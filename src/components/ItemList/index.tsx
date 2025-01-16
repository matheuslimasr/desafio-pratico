import React from 'react'
import { MarkType } from '../../screens/Home'
import { BaseIconMark, BaseInfoMark, TitleMark, Mark } from './styled'
import { useTheme } from '../../context/ThemeProvider';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacityProps } from 'react-native';

interface MarkItemI extends TouchableOpacityProps {
  item: MarkType;
}
 
export default function ItemList({item, ...rest}: MarkItemI) {
  const {theme} = useTheme();

  return (
    <Mark {...rest}>
      <>
        <BaseIconMark><Ionicons name="car-sport-outline" size={50} color={theme.colors.text} /></BaseIconMark>
        <BaseInfoMark>
        <TitleMark>{item.nome}</TitleMark>
        </BaseInfoMark>
      </>
    </Mark>
  )
}