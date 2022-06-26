import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface IProps {
  isFocused?: boolean;
}

export const Container = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${RFValue(16)}px;
`;

export const OptionsContainer = styled.TouchableOpacity`
  align-items: center;
  margin: 8px 16px 0;
`;

export const IconContainer = styled.View<IProps>`
  width: 90px;
  height: 90px;
  background: ${({ theme }) => theme.colors.innerBackground};
  border-radius: 12px;

  align-items: center;
  justify-content: center;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-width: 2px;
      border-color: ${theme.colors.button};
    `}
`;

export const IconImage = styled.Image`
  width: 75px;
  height: 75px;
`;

export const Placeholder = styled.Text<IProps>`
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(8)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.secundary};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      color: ${theme.colors.button};
    `}
`;
