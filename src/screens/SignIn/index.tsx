import React, { useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeProvider';
import { useAuth } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AntDesign from '@expo/vector-icons/AntDesign';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  Body,
  Container,
  Desc,
  Footer,
  FormGroup,
  FormGroupLink,
  Header,
  LinkRecoveryPassword,
  LinkRecoveryPasswordText,
  ShowPassword,
  Title,
  TitleShowPassword
} from './styled';

interface FormData {
  username?: string;
  password?: string;
}

const validationSchema = yup.object({
  username: yup.string().required('O campo Username precisa ser preenchido!'),
  password: yup
    .string()
    .min(2, 'A senha precisa ter pelo menos 2 caracteres!')
    .required('O campo senha precisa ser preenchido!'),
});

const SignIn: React.FC = () => {
  const { login } = useAuth();
  const { theme } = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = useCallback(
    async (data: FormData) => {
      await login(data.username, data.password);
      reset();
    },
    [login, reset]
  );

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(prevState => !prevState);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1}}>
      <Container>
        <Header>
          <Title>Olá, de novo!</Title>
          <Desc>Bem-vindo de volta, {'\n'} você fez falta!</Desc>
        </Header>

        <Body>
          <FormGroup>
            <Input
              name="username"
              control={control}
              placeholder="Digite seu username"
              keyboardType="default"
            />
          </FormGroup>

          <FormGroup>
            <Input
              name="password"
              control={control}
              placeholder="Digite sua senha"
              secureTextEntry={!isPasswordVisible}
            />
          </FormGroup>

          <FormGroupLink>
            <ShowPassword onPress={togglePasswordVisibility}>
              <AntDesign
                name={isPasswordVisible ? 'eye' : 'eyeo'}
                size={20}
                color={theme.colors.text}
              />
              <TitleShowPassword>
                {isPasswordVisible ? 'Ocultar' : 'Mostrar'}
              </TitleShowPassword>
            </ShowPassword>

            <LinkRecoveryPassword>
              <LinkRecoveryPasswordText>Recuperar acesso</LinkRecoveryPasswordText>
            </LinkRecoveryPassword>
          </FormGroupLink>
        </Body>

        <Footer>
          <Button
            activeOpacity={0.8}
            title="Fazer login"
            onPress={handleSubmit(onSubmit)}
          />
        </Footer>
      </Container>
    </SafeAreaView>
  );
};

export default SignIn;
