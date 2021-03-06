import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;

  padding: 0 16px;
  border-top-left-radius: ${RFValue(16)}px;
  border-top-right-radius: ${RFValue(16)}px;

  position: relative;
`;

export const CloseContainer = styled.TouchableOpacity`
  position: absolute;

  top: ${RFValue(16)}px;
  right: ${RFValue(16)}px;
`;

export const CloseIcon = styled(Ionicons)`
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.secundary};
`;

export const Description = styled.Text`
  width: 100%;
  margin-top: ${RFValue(44)}px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.secundary};
  font-size: ${({ theme }) => RFValue(theme.texts.default)}px;
`;

