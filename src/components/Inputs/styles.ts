import styled, { css } from 'styled-components/native';

import { TextInput } from 'react-native';
import ReactNativeMask from 'react-native-mask-input';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
}

export const Container = styled.View<Props>`
  background: ${({ theme }) => theme.colors.innerBackground};
  width: 100%;
  height: 50px;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px;
  margin-top: 16px;

  ${({ theme, isErrored }) =>
    isErrored &&
    css`
      border-color: ${theme.colors.error};
      border-width: 1px;
    `}
`;

export const ContainerButton = styled.TouchableOpacity<Props>`
  background: ${({ theme }) => theme.colors.innerBackground};
  width: 100%;
  height: 50px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px;
  margin-top: 16px;

  ${({ theme, isErrored }) =>
    isErrored &&
    css`
      border-color: ${theme.colors.error};
      border-width: 1px;
    `}
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

    ${({ isErrored, theme }) =>
    isErrored &&
    css`
      color: ${theme.colors.error};
    `}
`;

const inputStyles = css<Props>`
  color: ${({ theme }) => theme.colors.input_text};
  flex: 1;
  margin-left: 8px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.medium};

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

  ${({ isErrored, theme }) =>
    isErrored &&
    css`
      color: ${theme.colors.error};
    `}
`;

export const InputComponent = styled(TextInput)<Props>`
  ${inputStyles}
`;

export const MaskInput = styled(ReactNativeMask)<Props>`
  ${inputStyles}
`;

export const SelectInput = styled.Text<Props>`
  ${inputStyles}
`;

export const Label = styled.Text``;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  text-align: left;
  width: 100%;
  margin-top: 4px;
  margin-left: 4px;
`;

export const ModalContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  height: 40%;
  background: ${props => props.theme.colors.background};
  border-radius: ${RFValue(12)}px;
`;

export const OptionsHeader = styled.View`
  background: ${({ theme }) => theme.colors.button};
  width: 100%;
  height: 50px;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 12px;
`;

export const OptionHeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${RFValue(13)}px;
`;

export const ModalCloseButton = styled.TouchableOpacity``;

export const CloseIcon = styled(Ionicons)<Props>`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.background};
`;

export const OptionsContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 12px;
`;

export const OptionButton = styled.TouchableOpacity`
  justify-content: center;
  padding: 0 12px;

  height: 40px;
  border-radius: 4px;
  width: 100%;

  margin-top: ${RFValue(8)}px;
  background: ${({ theme }) => theme.colors.innerBackground};
`;

export const OptionButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.secundary};
`;
