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
} from './styles';

type LoginScreenProp = StackNavigationProp<any, 'Login'>;

const Login = () => {
  const formRef = useRef<FormHandles>(null);

  const { login } = useAuth();
  const { navigate } = useNavigation<LoginScreenProp>();

  const [loading, setloading] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async data => {
      setloading(true);
      await login({
        email: data.email,
        password: data.password,
      });
      setloading(false);
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
