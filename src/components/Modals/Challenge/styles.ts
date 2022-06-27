import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;

  padding: 0 ${RFValue(20)}px 0;
  background: ${props => props.theme.colors.background};
  padding: 16px;
  width: 100%;
  border-top-left-radius: ${({ theme }) => theme.styles.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.styles.borderRadius};

  position: relative;
`;

export const CloseContainer = styled.TouchableOpacity``;

export const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CloseIcon = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
  width: 100%;
  color: ${({ theme }) => theme.colors.secundary};
`;

export const Icon = styled.Image`
  width: ${RFValue(140)}px;
  height: ${RFValue(90)}px;
  margin-top: ${RFValue(16)}px;
`;

export const Content = styled.Text`
  margin-top: ${RFValue(8)}px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: left;
  color: ${({ theme }) => theme.colors.secundary};
  width: 100%;
`;
