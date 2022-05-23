import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  useMemo,
} from 'react';

import {
  TextInput,
  TextInputProps,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputEndEditingEventData,
} from 'react-native';

import { useField } from '@unform/core';
import { Ionicons } from '@expo/vector-icons';

import { MaskInputProps } from 'react-native-mask-input';
import { Container, InputComponent, Icon, Error, MaskInput } from './styles';

interface InputProps extends Omit<MaskInputProps, 'value'> {
  name: string;
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap;
}

interface InputReference extends TextInput {
  value: string;
}

export const Mask = ({
  name,
  placeholder,
  icon,
  mask,
  ...rest
}: InputProps) => {
  const inputRef = useRef<InputReference>(null);

  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name);

  const [inputValue, setInputValue] = useState<string>('');

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  useEffect(() => {
    if (defaultValue) {
      setInputValue(defaultValue);

      if (inputRef.current) {
        inputRef.current.value = defaultValue;
      }
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue: (ref, value) => {
        setInputValue(value as string);
        ref.value = value;
      },
      clearValue: ref => {
        setInputValue('');
        ref.value = '';
      },
    });
  });

  const handleOnChange = useCallback(masked => {
    setInputValue(masked);

    if (inputRef.current) {
      inputRef.current.value = masked;
    }
  }, []);

  const handleOnFocus = useCallback(() => {
    clearError();
    setIsFocused(true);
  }, [clearError]);

  const handleOnBlur = useCallback(() => {
    if (inputRef.current) {
      setIsFilled(!!inputRef.current.value);
    }

    setIsFocused(false);
  }, []);

  return (
    <>
      <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
        <Icon
          name={icon}
          isFocused={isFocused}
          isFilled={isFilled}
          isErrored={!!error}
        />
        <MaskInput
          ref={inputRef}
          value={inputValue}
          placeholder={placeholder}
          onChangeText={handleOnChange}
          mask={mask}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          isFocused={isFocused}
          isFilled={isFilled}
          isErrored={!!error}
          {...rest}
        />
      </Container>
      {error && <Error>{error}</Error>}
    </>
  );
};
