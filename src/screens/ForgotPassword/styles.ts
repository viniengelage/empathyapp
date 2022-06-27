import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const TextCard = styled.Text`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: left;
  margin-top: ${RFValue(16)}px;
`;

export const ModalView = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  padding: 35px;
`;
