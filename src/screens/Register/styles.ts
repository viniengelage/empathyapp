import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;

  padding: 0 ${RFValue(20)}px 0;
  background: ${props => props.theme.colors.background};
`;

export const Image = styled.Image`
  width: 250px;
  height: 250px;
  margin: ${RFValue(64)}px 0;
`;

export const Description = styled.Text`
  width: 100%;
  margin-top: ${RFValue(64)}px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.secundary};
  font-size: ${RFValue(13)}px;
`;

export const Bold = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
`;

export const FinalTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary};
`;
