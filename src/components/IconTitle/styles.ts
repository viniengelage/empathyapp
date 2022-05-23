import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding-top: ${RFValue(60)}px;
  align-items: center;
`;

export const IconContainer = styled.View`
  background: green;

  height: 64px;
  width: 64px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.primary};
`;

export const Icon = styled(Ionicons)`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  margin-top: ${RFValue(16)}px;
  font-size: ${RFValue(18)}px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.secundary};
`;
