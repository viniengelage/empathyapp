import { FormHandles } from '@unform/core';
import { Button } from 'components/Buttons/Default';
import { IconTitle } from 'components/IconTitle';
import { Input } from 'components/Inputs/Default';
import { Form } from 'global/styles/global';
import { useAuth } from 'hooks/auth';
import React, { useCallback, useRef, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { api } from 'services/api';
import { getValidationErrors } from 'utils/validation';

import * as Yup from 'yup';

import { CloseContainer, CloseIcon, Container, Description } from './styles';

interface IProps {
  onFinish(): void;
  close(): void;
}
export function ChangePassword({ onFinish, close }: IProps) {
  const formRef = useRef<FormHandles>(null);

  const { getUser } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async data => {
      setLoading(true);

      // return console.log(data);

      try {
        const schema = Yup.object().shape({
          old_password: Yup.string().required(),
          new_password: Yup.string().min(8).required(),
          confirm_password: Yup.string().oneOf(
            [Yup.ref('new_password'), null],
            'Senhas devem coincidir',
          ),
        });

        await schema.validate(data, { abortEarly: false });

        await api.put('/users/me/password', data);

        await getUser();

        setLoading(false);

        onFinish();
      } catch (error) {
        setLoading(false);

        const errors = getValidationErrors(error);

        if (errors) {
          formRef.current?.setErrors(errors);
        }
      }
    },
    [getUser, onFinish],
  );

  return (
    <Container>
      <CloseContainer onPress={() => close()}>
        <CloseIcon name="close-outline" />
      </CloseContainer>

      <IconTitle
        title="Alterar Senha"
        icon="code-working-outline"
        style={{
          paddingTop: RFValue(16),
        }}
      />

      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input
          name="old_password"
          icon="lock-open-outline"
          placeholder="Senha atual"
          secureTextEntry
          returnKeyType="next"
          onSubmitEditing={() =>
            formRef.current?.getFieldRef('new_password').focus()
          }
        />

        <Input
          name="new_password"
          icon="lock-closed-outline"
          placeholder="Nova senha"
          secureTextEntry
          returnKeyType="next"
          onSubmitEditing={() =>
            formRef.current?.getFieldRef('confirm_password').focus()
          }
        />
        <Input
          name="confirm_password"
          icon="lock-closed-outline"
          placeholder="Confirmar nova senha"
          secureTextEntry
          returnKeyType="send"
          onSubmitEditing={() => formRef.current?.submitForm()}
        />
      </Form>

      <Button
        title="Atualizar senha"
        loading={loading}
        style={{ marginBottom: 32 }}
        onPress={() => formRef.current?.submitForm()}
      />
    </Container>
  );
}
