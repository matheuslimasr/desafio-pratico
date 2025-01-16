import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({theme}: {theme: DefaultTheme}) => theme.colors.background};
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}: {theme: DefaultTheme}) => theme.fonts.bold};
	font-size: ${RFValue(30)}px;
	color: ${({theme}: {theme: DefaultTheme}) => theme.colors.text_dark};
`;

export const Desc = styled.Text`
  font-family: ${({theme}: {theme: DefaultTheme}) => theme.fonts.regular};
	font-size: ${RFValue(16)}px;
	color: ${({theme}: {theme: DefaultTheme}) => theme.colors.text_dark};
  text-align: center;
`;

export const Header = styled.View`
  width: 100%;
  height: auto;
  min-height: 150px;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  width: 100%;
  height: auto;
  margin-bottom: 40px;
`;

export const Footer = styled.View`
  width: 100%;
  height: auto;
  margin-bottom: 40px;
`;

export const FormGroup = styled.View`
  width: 100%;
  height: auto;
  margin-bottom: 0px;
`;

export const FormGroupLink = styled.View`
  width: 100%;
  height: auto;
  margin-bottom: 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LinkRecoveryPassword = styled(TouchableOpacity)<TouchableOpacityProps>``;

export const LinkRecoveryPasswordText = styled.Text`
  font-family: ${({theme}: {theme: DefaultTheme}) => theme.fonts.medium};
	font-size: ${RFValue(12)}px;
	color: ${({theme}: {theme: DefaultTheme}) => theme.colors.text};
`;

export const ShowPassword= styled(TouchableOpacity)<TouchableOpacityProps>`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${({theme}: {theme: DefaultTheme}) => theme.colors.shape};
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const TitleShowPassword = styled.Text`
  font-family: ${({theme}: {theme: DefaultTheme}) => theme.fonts.medium};
	font-size: ${RFValue(12)}px;
	color: ${({theme}: {theme: DefaultTheme}) => theme.colors.text};
  margin-left: 8px;
`;