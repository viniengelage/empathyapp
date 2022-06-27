import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  background: ${({ theme }) => theme.colors.innerBackground};
  border-radius: ${({ theme }) => theme.styles.borderRadius};

  margin-top: ${RFValue(16)}px;
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  height: ${RFValue(40)}px;
  width: 4px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.styles.borderRadius};

  margin-right: ${RFValue(8)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: left;
  color: ${({ theme }) => theme.colors.secundary};
`;

export const Description = styled.Text`
  margin-top: ${RFValue(8)}px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.light};
  text-align: left;
  color: ${({ theme }) => theme.colors.secundary};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Icon = styled.Image`
  width: ${RFValue(140)}px;
  height: ${RFValue(90)}px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.button};
`;

export const ButtonIcon = styled(Ionicons)`
  margin-left: ${RFValue(4)}px;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.button};
`;
