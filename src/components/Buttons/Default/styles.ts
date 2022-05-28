import styled, { css } from 'styled-components/native';

interface IProps {
  isLoading?: boolean;
  isActive?: boolean;
}

export const Container = styled.TouchableOpacity<IProps>`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.button};
  border-radius: ${({ theme }) => theme.styles.borderRadius};

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
