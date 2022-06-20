import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Section = styled.View`
  background: ${({ theme }) => theme.colors.innerBackground};
  flex-direction: row;
  border-radius: ${RFValue(6)}px;
  padding: 12px;
  width: 100%;
  margin-top: ${RFValue(16)}px;
`;

export const Points = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secundary};
  width: 80%;
`;

export const RoadImage = styled.Image`
  width: 72px;
  height: 72px;
`;
