import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { TouchableOpacity } from 'react-native';

import { Form } from 'styles/global';
import Input from 'components/Inputs/Default';
import Button from 'components/Buttons/Default';

import WelcomeImage from 'components/Svgs/WelcomeImage';
import {
  Container,
  ImageContainer,
  RegisterContainer,
  RegisterText,
  RegisterButton,
} from './styles';

const Login = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <ImageContainer>
        <WelcomeImage />
      </ImageContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="primary_input"
          placeholder="E-mail"
          icon="at-outline"
          keyboardType="email-address"
        />
        <Input
          name="password"
          placeholder="Senha"
          icon="lock-closed-outline"
          secureTextEntry
        />
        <Button
          title="Fazer Login"
          onPress={() => formRef.current?.submitForm()}
        />
      </Form>
      <RegisterContainer>
        <RegisterText>Ainda não tem conta?</RegisterText>
        <TouchableOpacity>
          <RegisterButton>Registre-se</RegisterButton>
        </TouchableOpacity>
      </RegisterContainer>
    </Container>
  );
};

export default Login;
