import React, { useRef, useEffect, useCallback, useState } from 'react';
import {
  TextInput,
  TextInputProps,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputEndEditingEventData,
} from 'react-native';
import { useField } from '@unform/core';

import { useTheme } from 'styled-components';

import { Ionicons } from '@expo/vector-icons';

import { Container, InputComponent, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap;
}

interface InputReference extends TextInput {
  value: string;
}

const Input = ({
  name,
  placeholder,
  icon,
  onChangeText,
  ...rest
}: InputProps) => {
  const inputRef = useRef<InputReference>(null);
  const { colors } = useTheme();
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  const [inputValue, setInputValue] = useState<string>('');

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;
        return '';
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' });
          inputRef.current.value = '';
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    (value: string) => {
      if (inputRef.current) inputRef.current.value = value;
      setInputValue(value);
      if (onChangeText) onChangeText(value);
    },
    [onChangeText],
  );

  const handleInputBlur = useCallback(
    (event: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
      if (inputRef.current) {
        inputRef.current.value = inputValue;
        inputRef.current.setNativeProps({ text: inputValue });
        setIsFilled(!!inputValue);
      }

      setIsFocused(false);
    },
    [inputValue],
  );

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      <Icon name={icon} isFocused={isFocused} isFilled={isFilled} />
      <InputComponent
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        placeholder={placeholder}
        placeholderTextColor={isFocused ? colors.button : colors.input_text}
        isFocused={isFocused}
        isFilled={isFilled}
        onFocus={() => setIsFocused(true)}
        onEndEditing={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default Input;
