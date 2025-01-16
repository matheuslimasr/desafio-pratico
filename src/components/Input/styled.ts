import styled, { DefaultTheme } from "styled-components/native";

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const StyledInput = styled.TextInput<{ hasError: boolean }>`
  width: 100%;
  height: 60px;
  font-size: 16px;
  color: ${({theme}: {theme: DefaultTheme}) => theme.colors.text_dark};
  background-color: ${({theme}: {theme: DefaultTheme}) => theme.colors.shape};
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: ${({theme}: {theme: DefaultTheme}) => theme.fonts.regular};
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;