import React, { useCallback, useRef, useState } from 'react';

import { Input } from 'components/Inputs/Default';
import { Form } from 'styles/global';
import { Button } from 'components/Buttons/Default';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import register1image from 'assets/Register1.png';
import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup';
import { api } from 'services/api';
import { getValidationErrors } from '../../../utils/validation';
import { Bold, Container, Description, Image } from '../styles';

type Step1ScreenProp = StackNavigationProp<any, 'Step1'>;

interface IFormData {
  name: string;
  email: string;
  password: string;
}

export function Step1() {
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation<Step1ScreenProp>();

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit: SubmitHandler<IFormData> = useCallback(
    async data => {
      formRef.current?.setErrors({});
      setLoading(true);

      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().required(),
          password: Yup.string().min(8),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/auth/register', data);

        const {
          data: { token },
        } = await api.post('/auth/login', {
          email: data.email,
          password: data.password,
        });

        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        setLoading(false);

        navigate('Step2');
      } catch (error) {
        setLoading(false);

        const errors = getValidationErrors(error);

        if (errors) {
          formRef.current?.setErrors(errors);
        }
      }
    },
    [navigate],
  );

  return (
    <Container>
      <Description>
        <Bold>Seja bem vindo! </Bold>
        Para embarcar nessa jornada de autoconhecimento e melhora de vida,
        preencha os dados para que possamos te conhecer melhor!
      </Description>

      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input
          name="name"
          placeholder="Nome completo"
          icon="person-outline"
          returnKeyType="next"
          onSubmitEditing={() => formRef.current?.getFieldRef('email').focus()}
        />
        <Input
          name="email"
          placeholder="E-mail"
          icon="at-outline"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() =>
            formRef.current?.getFieldRef('password').focus()
          }
          autoCapitalize="none"
        />
        <Input
          name="password"
          placeholder="Senha"
          icon="lock-closed-outline"
          returnKeyType="send"
          onSubmitEditing={() => formRef.current?.submitForm()}
          textContentType="password"
          secureTextEntry
        />
        <Button
          title="Continuar"
          loading={loading}
          onPress={() => formRef.current?.submitForm()}
        />
      </Form>

      <Image
        style={{
          flex: 1,
          height: undefined,
          width: undefined,
          alignSelf: 'stretch',
        }}
        source={register1image}
        resizeMode="contain"
      />
    </Container>
  );
}
