import { useField } from '@unform/core';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Modal from 'react-native-modal';

import {
  ContainerButton,
  Icon,
  ModalCloseButton,
  ModalContainer,
  OptionHeaderTitle,
  OptionsHeader,
  SelectInput,
  CloseIcon,
  OptionsContainer,
  OptionButton,
  OptionButtonText,
} from './styles';

interface IOptionsProps {
  label: string;
  value: string;
}

interface IProps {
  placeholder: string;
  name: string;
  options: IOptionsProps[];
}

export default function Select({
  placeholder: placeholderProp,
  name,
  options = [],
}: IProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [placeholder, setPlaceholder] = useState<string>(placeholderProp);
  const [value, setValue] = useState<string>('');

  const { registerField, fieldName, defaultValue } = useField(name);

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (r, v) => setValue(v),
      clearValue: () => setValue(''),
    });
  });

  useEffect(() => {
    if (value && options.length > 0) {
      const optionLabel = options.find(option => option.value === value)?.label;

      if (optionLabel) {
        setPlaceholder(optionLabel);
      }
    }
  }, [value, options]);

  return (
    <>
      <ContainerButton onPress={() => setIsVisible(true)}>
        <Icon name="chevron-down-outline" isFilled={!!value} />
        <SelectInput isFilled={!!value}>{placeholder}</SelectInput>
      </ContainerButton>

      <Modal isVisible={isVisible} style={{ alignItems: 'center' }}>
        <ModalContainer>
          <OptionsHeader>
            <OptionHeaderTitle>Selecione uma opçao</OptionHeaderTitle>
            <ModalCloseButton onPress={() => setIsVisible(false)}>
              <CloseIcon name="close-outline" />
            </ModalCloseButton>
          </OptionsHeader>

          <ScrollView style={{ flex: 1, width: '100%' }}>
            <OptionsContainer>
              {options.map(option => (
                <OptionButton
                  key={option.value}
                  onPress={() => {
                    setValue(option.value);
                    setIsVisible(false);
                  }}
                >
                  <OptionButtonText>{option.label}</OptionButtonText>
                </OptionButton>
              ))}
            </OptionsContainer>
          </ScrollView>
        </ModalContainer>
      </Modal>
    </>
  );
}
