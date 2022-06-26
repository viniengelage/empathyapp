import React, { useCallback, useRef, useState } from 'react';

import dayjs from 'dayjs';
import { FormHandles } from '@unform/core';
import { RFValue } from 'react-native-responsive-fontsize';

import { Input } from 'components/Inputs/Default';
import { Form } from 'global/styles/global';
import { IconTitle } from 'components/IconTitle';
import { Mask } from 'components/Inputs/Mask';
import { Select } from 'components/Inputs/Select';
import { Button } from 'components/Buttons/Default';
import { api } from 'services/api';
import { useAuth } from 'hooks/auth';
import { CloseContainer, CloseIcon, Container } from './styles';

interface IProps {
  onFinish(): void;
  close(): void;
}

export function PersonalInformations({ onFinish, close }: IProps) {
  const formRef = useRef<FormHandles>(null);

  const { user, getUser } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async data => {
      setLoading(true);

      const birthday = new Date();

      if (data.birthday) {
        const birthdaySplit = data.birthday.split('/');

        dayjs(
          birthday.setFullYear(
            Number(birthdaySplit[2]),
            Number(birthdaySplit[1]) - 1,
            Number(birthdaySplit[0]),
          ),
        ).toDate();
      }

      try {
        await api.put('/users', {
          ...data,
          birthday,
        });

        await getUser();

        setLoading(false);

        onFinish();
      } catch (error) {
        setLoading(false);
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
        title="Informações pessoais"
        icon="person-outline"
        style={{
          paddingTop: RFValue(16),
        }}
      />

      <Form
        onSubmit={handleSubmit}
        ref={formRef}
        initialData={{
          name: user.name,
          birthday: dayjs(user.birthday).format('DD/MM/YYYY'),
          genre: user.genre,
        }}
      >
        <Input name="name" icon="person-outline" placeholder="Nome completo" />
        <Mask
          name="birthday"
          icon="calendar-outline"
          placeholder="Data de nascimento"
        />
        <Select
          name="genre"
          placeholder="Genero"
          options={[
            { label: 'Masculino', value: 'male' },
            { label: 'Feminino', value: 'female' },
            { label: 'Outro', value: 'other' },
          ]}
        />
      </Form>

      <Button
        title="Salvar"
        loading={loading}
        style={{ marginBottom: 32 }}
        onPress={() => formRef.current?.submitForm()}
      />
    </Container>
  );
}
