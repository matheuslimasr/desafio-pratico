import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({theme}: {theme: DefaultTheme}) => theme.colors.shape};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}: {theme: DefaultTheme}) => theme.fonts.bold};
  color: ${({theme}: {theme: DefaultTheme}) => theme.colors.text_dark};
  text-align: center;
  margin-top: 20px;
`;