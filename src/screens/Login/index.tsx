import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { TouchableOpacity, Image } from 'react-native';

import { Form } from 'global/styles/global';
import { Input } from 'components/Inputs/Default';
import { Button } from 'components/Buttons/Default';

import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { WelcomeImage } from 'components/Svgs/WelcomeImage';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScrollView } from 'react-native-gesture-handler';
import { Logo } from 'components/Svgs/Logo';
import Toast from 'react-native-toast-message';
import { Axios, AxiosError } from 'axios';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  LogoContainer,
  WelcomeTitle,
  ButtonWrapper,
  RegisterContainer,
  RegisterText,
  RegisterButton,
  Description,
  ForgotPasswordButton,
  ForgotPasswordText,
} from './styles';

type LoginScreenProp = StackNavigationProp<any, 'Login'>;

const Login = () => {
  const formRef = useRef<FormHandles>(null);
  const { login } = useAuth();
  const { navigate } = useNavigation<LoginScreenProp>();

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async data => {
      try {
        setLoading(true);
        await login({
          email: data.email,
          password: data.password,
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);

        const axiosError = error as unknown as AxiosError;

        if (axiosError.response && axiosError.response.status === 400) {
          Toast.show({
            type: 'error',
            text1: 'E-mail ou senha incorretos',
            text2: 'Verifique suas informações',
          });
        }
      }
    },
    [login],
  );

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <WelcomeTitle>Seja bem vindo</WelcomeTitle>
          <Description>Para continuar, preencha seus dados abaixo</Description>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{ paddingHorizontal: RFValue(20) }}
          >
            <Input
              name="email"
              placeholder="E-mail"
              icon="at-outline"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() =>
                formRef.current?.getFieldRef('password').focus()
              }
            />
            <Input
              name="password"
              placeholder="Senha"
              icon="lock-closed-outline"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
          </Form>
        </ScrollView>

        <ForgotPasswordButton onPress={() => navigate('ForgotPassword')}>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPasswordButton>

        <ButtonWrapper>
          <Button
            title="Fazer Login"
            loading={loading}
            onPress={() => formRef.current?.submitForm()}
          />
        </ButtonWrapper>

        <RegisterContainer>
          <RegisterText>Ainda não tem conta?</RegisterText>
          <TouchableOpacity onPress={() => navigate('Register')}>
            <RegisterButton>Registre-se</RegisterButton>
          </TouchableOpacity>
        </RegisterContainer>
      </Container>
    </>
  );
};

export default Login;
