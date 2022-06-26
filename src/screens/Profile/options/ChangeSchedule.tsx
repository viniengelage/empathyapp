import React, { useCallback, useRef, useState } from 'react';

import { IconTitle } from 'components/IconTitle';
import { View } from 'react-native';

import { FormHandles } from '@unform/core';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  Container as InputContainer,
  Icon,
  InputComponent,
} from 'components/Inputs/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'components/Buttons/Default';
import dayjs from 'dayjs';
import { api } from 'services/api';
import { CloseContainer, CloseIcon, Container } from './styles';

interface IProps {
    onFinish(): void;
    close(): void;
}

export function ChangeSchedule({ onFinish, close }: IProps) {
  const [time, setTime] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleConfirmDate = useCallback(data => {
    setIsOpen(false);

    setTime(dayjs(data).format('HH:mm'));

    setIsActive(true);
  }, []);

  const handleSubmit = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.put('/users', {
        free_time: time,
      });


      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [time]);

  return (
    <Container>
        <CloseContainer onPress={() => close()}>
            <CloseIcon name="close-outline" />
        </CloseContainer>
      <IconTitle
        title="Qual horário você tira para si mesmo?"
        icon="time-outline"
      />

      <TouchableOpacity
        style={{ width: '100%' }}
        onPress={() => setIsOpen(true)}
      >
        <InputContainer>
          <Icon name="time-outline" />
          <InputComponent value={time} placeholder="Horário" editable={false} />
        </InputContainer>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isOpen}
        is24Hour
        mode="time"
        onConfirm={handleConfirmDate}
        onCancel={() => setIsOpen(false)}
      />

      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'flex-end',
          marginBottom: 60,
        }}
      >
        <Button
          title="Continuar"
          isActive={isActive}
          loading={loading}
          onPress={handleSubmit}
        />
      </View>
    </Container>
  );
}