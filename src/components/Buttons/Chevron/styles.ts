import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(16)}px;
`;

export const IconContainer = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background: ${({ theme }) => theme.colors.button};
  border-radius: ${RFValue(24)}px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: ${RFValue(8)}px;
  font-size: ${RFValue(16)}px;

  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Chevron = styled(Ionicons)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.button};
`;
