import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const AvatarImage = styled.Image`
  width: ${RFValue(42)}px;
  height: ${RFValue(42)}px;
  border-radius: ${RFValue(6)}px;
`;

export const ProfileName = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  margin-left: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.secundary};
`;
