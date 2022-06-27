import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  padding: ${RFValue(15)}px;
  border-radius: 12px;
  background-color: rgba(242, 242, 242, 1);
  margin: 10px 0;
`;

export const ImageContainer = styled.View`
  margin-bottom: 5px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 132px;
  border-radius: ${RFValue(12)}px;
`;

export const NoticeTitle = styled.Text`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.button};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const NoticeMessage = styled.Text`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: 10px 0;
`;

export const MoreInformation = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  font-family: ${({ theme }) => theme.fonts.light};
  color: #fff;
`;
