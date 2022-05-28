import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  Ref,
} from 'react';
import { useField } from '@unform/core';
import { ScrollView } from 'react-native';
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
  editable?: boolean;
}

export interface ISelectReference {
  open(): void;
}

function SelectComponent(
  { placeholder: placeholderProp, name, options = [], editable = true }: IProps,
  ref: Ref<ISelectReference>,
) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [placeholder, setPlaceholder] = useState<string>(placeholderProp);
  const [value, setValue] = useState<string>('');
  const [isFilled, setIsFilled] = useState<boolean>(false);

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

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsVisible(true);
    },
  }));

  return (
    <>
      <ContainerButton
        onPress={() => {
          setIsVisible(editable);
        }}
      >
        <Icon name="chevron-down-outline" isFilled={isFilled} />
        <SelectInput isFilled={isFilled}>{placeholder}</SelectInput>
      </ContainerButton>

      <Modal
        isVisible={isVisible}
        style={{ alignItems: 'center' }}
        onBackButtonPress={() => setIsVisible(false)}
        onModalHide={() => setIsFilled(!!value)}
      >
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

export const Select = forwardRef(SelectComponent);
