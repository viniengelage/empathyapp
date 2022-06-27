import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background};

  flex: 1;
  padding-top: ${RFValue(64)}px;
`;

export const LogoContainer = styled.View`
  width: 100%;
  align-items: center;
`;
export const WelcomeTitle = styled.Text`
  color: ${({ theme }) => theme.colors.button};
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  margin-bottom: 10px;
  text-align: center;

  margin-top: ${RFValue(24)}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.secundary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  margin-bottom: 10px;
  text-align: left;
  align-self: center;
  width: 90%;
`;

export const ButtonWrapper = styled.View`
  width: 90%;
  margin-top: 16px;
  align-self: center;
`;

export const RegisterContainer = styled.View`
  margin: 16px 0 32px;
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

export const ForgotPasswordButton = styled.TouchableOpacity``;
export const ForgotPasswordText = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(12)}px;
`;
