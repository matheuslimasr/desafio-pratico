import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";

export const Mark = styled(TouchableOpacity)<TouchableOpacityProps>`
  width: 100%;
  height: auto;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({theme}: {theme: DefaultTheme}) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  elevation: 3;
  margin-bottom: 20px;
`;

export const BaseIconMark = styled.View``;

export const BaseInfoMark = styled.View`
  flex: 1;
`;

export const TitleMark = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}: {theme: DefaultTheme}) => theme.fonts.medium};
  color: ${({theme}: {theme: DefaultTheme}) => theme.colors.text};
  margin-left: 30px;
`;