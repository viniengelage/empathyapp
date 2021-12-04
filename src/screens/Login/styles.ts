import styled from 'styled-components/native';

// import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageContainer = styled.View``;

export const RegisterContainer = styled.View`
  margin-top: 16px;
  align-items: center;
`;

export const RegisterText = styled.Text`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const RegisterButton = styled.Text`
  color: ${({ theme }) => theme.colors.button};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
