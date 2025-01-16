import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({theme}: {theme: DefaultTheme}) => theme.colors.background};
`;

export const WelcomeText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}: {theme: DefaultTheme}) => theme.fonts.regular};
  color: ${({theme}: {theme: DefaultTheme}) => theme.colors.text};
  margin-bottom: 20px;
`;

export const Body = styled.View`
  width: 100%;
  height: auto;
`;

export const FormGroup = styled.View`
  width: 100%;
  height: auto;
  margin-bottom: 0px;
`;

export const MarkTitleBody = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}: {theme: DefaultTheme}) => theme.fonts.bold};
  color: ${({theme}: {theme: DefaultTheme}) => theme.colors.text_dark};
  margin-bottom: 15px;
`;