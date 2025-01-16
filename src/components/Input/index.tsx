import React from "react";
import { TextInputProps } from "react-native";
import { useController, UseControllerProps } from "react-hook-form";
import { InputContainer, StyledInput, ErrorText } from "./styled";

interface InputProps extends TextInputProps {
  name: string;
  control: any; 
  rules?: UseControllerProps["rules"];
}

const Input: React.FC<InputProps> = ({ name, control, rules, ...rest }) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <InputContainer>
      <StyledInput
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        hasError={!!error}
        {...rest}
      />
      {error && <ErrorText>{error.message}</ErrorText>}
    </InputContainer>
  );
};

export default Input;