import React, { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FormHandles } from '@unform/core';
import { IconTitle } from 'components/IconTitle';
import { Input } from 'components/Inputs/Default';
import { Container, Form } from 'global/styles/global';
import Toast from 'react-native-toast-message';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Modal,
} from 'react-native';

import { Button } from 'components/Buttons/Default';
import { api } from 'services/api';
import * as Yup from 'yup';
import { getValidationErrors } from 'utils/validation';
import { ModalView, TextCard } from './styles';

type ForgotPasswordScreenProp = StackNavigationProp<any, 'ForgotPassword'>;
export function ForgotPassword() {
  const formRef = useRef<FormHandles>(null);

  const { navigate } = useNavigation<ForgotPasswordScreenProp>();

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(async (data): Promise<void> => {
    try {
      setLoading(true);

      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
      });

      await schema.validate(data, { abortEarly: false });

      await api.post('/auth/password/forgot', data);

      setLoading(false);
      setModalVisible(true);
    } catch (error) {
      setLoading(false);

      const errors = getValidationErrors(error);

      if (errors) {
        formRef.current?.setErrors(errors);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Algum erro aconteceu',
          text2: 'Tente novamente mais tarde',
        });
      }
    }
  }, []);

  return (
    <>
      <Container>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ flex: 1, height: '100%' }}
        >
          <IconTitle title="Esqueceu a senha?" icon="lock-closed-outline" />
          <TextCard>
            Para que você consiga voltar a embarcar nessa jornada de
            autoconhecimento digite seu email nos campos abaixo para enviarmos
            um link para redefinir sua senha!
          </TextCard>

          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input
              name="email"
              placeholder="Seu email"
              icon="at-outline"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
          </Form>

          <View
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'flex-end',
              marginBottom: 32,
            }}
          >
            <Button
              title="Enviar email"
              loading={loading}
              onPress={() => formRef.current?.submitForm()}
            />
          </View>
        </ScrollView>
      </Container>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ModalView>
          <View>
            <IconTitle
              title="Email enviado com sucesso!"
              icon="checkmark-done-outline"
            />

            <TextCard>
              O email para redefinição de senha foi enviado, entre no link para
              definir uma nova senha e voltar a ter acesso a sua conta.
            </TextCard>
          </View>
          <Button title="Fazer login" onPress={() => navigate('Login')} />
        </ModalView>
      </Modal>
    </>
  );
}
