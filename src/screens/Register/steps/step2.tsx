import React, { useCallback, useRef, useState } from 'react';

import { Input } from 'components/Inputs/Default';
import { Form } from 'styles/global';
import { Button } from 'components/Buttons/Default';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as Yup from 'yup';

import register2image from 'assets/register2.png';

import { Mask } from 'components/Inputs/Mask';
import { Masks } from 'react-native-mask-input';
import Select from 'components/Inputs/Select';

import { api } from 'services/api';
import dayjs from 'dayjs';
import { getValidationErrors } from '../../../utils/validation';
import { Container, Bold, Description, Image } from '../styles';

type Step2ScreenProp = StackNavigationProp<any, 'Step1'>;

interface IFormData {
  cellphone: string;
  birthday: string;
  gren: string;
}

export function Step2() {
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation<Step2ScreenProp>();

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit: SubmitHandler<IFormData> = useCallback(
    async data => {
      formRef.current?.setErrors({});
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
        const schema = Yup.object().shape({
          cellphone: Yup.string().required(),
          birthday: Yup.date().required(),
          genre: Yup.string().required(),
        });

        await schema.validate(data, { abortEarly: false });

        await api.put('/users', {
          ...data,
          birthday,
        });

        setLoading(false);

        navigate('Step3');
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
        <Bold>Perfeito! </Bold>
        <Description>Para continuar, nos deixe saber quem você é!</Description>
      </Description>

      <Form onSubmit={handleSubmit} ref={formRef}>
        <Mask
          name="cellphone"
          placeholder="Telefone"
          icon="call-outline"
          mask={Masks.BRL_PHONE}
        />

        <Mask
          name="birthday"
          placeholder="Data de nascimento"
          icon="calendar-outline"
          mask={Masks.DATE_DDMMYYYY}
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

        <Button
          title="Continuar"
          loading={loading}
          onPress={() => formRef.current?.submitForm()}
        />
      </Form>

      <Image source={register2image} />
    </Container>
  );
}
