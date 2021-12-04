import styled, { css } from 'styled-components/native';

import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  isFocused?: boolean;
  isFilled?: boolean;
}

export const Container = styled.View<Props>`
  background: ${({ theme }) => theme.colors.innerBackground};
  width: 90%;
  height: 50px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px;
  margin-top: 16px;

  /* ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border: 1px solid ${theme.colors.button};
    `}

  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      border: 1px solid ${theme.colors.button};
    `} */
`;
export const Icon = styled(Ionicons)<Props>`
  color: ${({ theme }) => theme.colors.input_text};
  font-size: 24px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      color: ${theme.colors.button};
    `}

  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      color: ${theme.colors.button};
    `}
`;

export const InputComponent = styled(TextInput)<Props>`
  color: ${({ theme }) => theme.colors.input_text};
  flex: 1;
  margin-left: 8px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      color: ${theme.colors.button};
    `}

  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      color: ${theme.colors.button};
    `}
`;

export const Label = styled.Text``;
// export const Exa
