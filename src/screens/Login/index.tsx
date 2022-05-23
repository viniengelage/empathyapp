import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { TouchableOpacity } from 'react-native';

import { Form } from 'styles/global';
import { Input } from 'components/Inputs/Default';
import { Button } from 'components/Buttons/Default';

import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import WelcomeImage from 'components/Svgs/WelcomeImage';
import { api } from 'services/api';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  ImageContainer,
  RegisterContainer,
  RegisterText,
  RegisterButton,
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
    <Container>
      <StatusBar style="light" />
      <ImageContainer>
        <WelcomeImage />
      </ImageContainer>
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
        <Button
          title="Fazer Login"
          loading={loading}
          onPress={() => formRef.current?.submitForm()}
        />
      </Form>
      <RegisterContainer>
        <RegisterText>Ainda não tem conta?</RegisterText>
        <TouchableOpacity onPress={() => navigate('Register')}>
          <RegisterButton>Registre-se</RegisterButton>
        </TouchableOpacity>
      </RegisterContainer>
    </Container>
  );
};

export default Login;
