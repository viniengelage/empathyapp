import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

interface Props {
  isLoading?: boolean;
}

export const Container = styled(RectButton)<Props>`
  width: 90%;
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
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 18px;
  line-height: 27px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
