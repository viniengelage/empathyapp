import { useField } from '@unform/core';
import React, { useEffect, useState } from 'react';

import image from 'assets/podcast.png';

import {
  Container,
  IconContainer,
  IconImage,
  OptionsContainer,
  Placeholder,
} from './styles';

export interface ICheckboxOptionsProps {
  placeholder: string;
  icon: string;
  id: string;
}

interface IProps {
  name: string;
  options: ICheckboxOptionsProps[];
  onSelect?(id: string): void;
  isFilled?(isFilled: boolean): void;
}

export function Checkbox({ name, options = [], onSelect, isFilled }: IProps) {
  const [values, setValues] = useState<ICheckboxOptionsProps[]>([]);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => values.map(value => value.id),
    });
  }, [registerField, fieldName, values]);

  useEffect(() => {
    if (isFilled) {
      isFilled(values.length > 0);
    }
  }, [values, isFilled]);

  useEffect(() => {
    if (options.length > 0) {
      console.log('hey', options);
    }
  }, []);

  return (
    <Container>
      {options.map(option => (
        <OptionsContainer
          key={option.id}
          onPress={() => {
            if (values.some(value => value.id === option.id)) {
              setValues(values.filter(value => value.id !== option.id));
            } else {
              setValues([...values, option]);
            }

            if (onSelect) {
              onSelect(option.id);
            }
          }}
        >
          <IconContainer
            isFocused={values.some(value => value.id === option.id)}
          >
            <IconImage
              source={{
                uri: option.icon,
              }}
            />
          </IconContainer>
          <Placeholder isFocused={values.some(value => value.id === option.id)}>
            {option.placeholder}
          </Placeholder>
        </OptionsContainer>
      ))}
    </Container>
  );
}
