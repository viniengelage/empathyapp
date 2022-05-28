import React, { useCallback, useRef, useState } from 'react';

import { Input } from 'components/Inputs/Default';
import { Form } from 'styles/global';
import { IconTitle } from 'components/IconTitle';
import { RFValue } from 'react-native-responsive-fontsize';
import { Mask } from 'components/Inputs/Mask';
import { Select } from 'components/Inputs/Select';
import dayjs from 'dayjs';
import { Button } from 'components/Buttons/Default';
import { api } from 'services/api';
import { FormHandles } from '@unform/core';
import { Container } from './styles';
import { useAuth } from '../../../hooks/auth';

interface IProps {
  onFinish(): void;
}

export function PersonalInformations({ onFinish }: IProps) {
  const formRef = useRef<FormHandles>(null);

  const { user, getUser } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);

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

  const handleNameFocus = () => {
    formRef.current?.getFieldRef('name').focus();
  };

  return (
    <Container>
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
        <Input
          name="name"
          icon="person-outline"
          placeholder="Nome completo"
          editable={isEditable}
        />
        <Mask
          name="birthday"
          icon="calendar-outline"
          placeholder="Data de nascimento"
          editable={isEditable}
        />
        <Select
          name="genre"
          placeholder="Genero"
          options={[
            { label: 'Masculino', value: 'male' },
            { label: 'Feminino', value: 'female' },
            { label: 'Outro', value: 'other' },
          ]}
          editable={isEditable}
        />
      </Form>

      <Button
        title={isEditable ? 'Salvar' : 'Editar'}
        loading={loading}
        style={{ marginBottom: 32 }}
        onPress={() => {
          if (isEditable) {
            formRef.current?.submitForm();
          } else {
            setIsEditable(true);
            handleNameFocus();
          }
        }}
      />
    </Container>
  );
}
