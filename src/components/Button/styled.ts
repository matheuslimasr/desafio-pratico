import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled(TouchableOpacity)<TouchableOpacityProps>`
	width: 100%;
	height: 70px;
	border-radius: 10px;
	background-color: ${({theme}: {theme: DefaultTheme}) => theme.colors.primary};
	justify-content: center;
	align-items: center;
	elevation: 20;
`;

export const TitleButton = styled.Text`
	font-family: ${({theme}: {theme: DefaultTheme}) => theme.fonts.regular};
	font-size: ${RFValue(16)}px;
	color: ${({theme}: {theme: DefaultTheme}) => theme.colors.shape};
`;