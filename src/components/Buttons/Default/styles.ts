import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

interface IProps {
  isLoading?: boolean;
  isActive?: boolean;
}

export const Container = styled(RectButton)<IProps>`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.button};
  border-radius: 12px;

  align-items: center;
  justify-content: center;

  margin-top: 16px;

  ${({ isLoading, theme }) =>
    isLoading &&
    css`
      background: ${theme.colors.opacity_button};
    `};

  ${({ isActive, theme }) =>
    !isActive &&
    css`
      background: ${theme.colors.input_text};
    `}
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 18px;
  line-height: 27px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
