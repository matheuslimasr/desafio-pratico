import { Image, ImageProps } from "react-native";
import styled from "styled-components/native";

export const Header = styled.View`
  width: 100%;
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const Brand = styled(Image)<ImageProps>`
  width: 150px;
  height: 50px;
`;

export const BaseBrand = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

export const BaseOptionsHeader = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonSignOut = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled(Image)<ImageProps>`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  margin-left: 10px;
`;