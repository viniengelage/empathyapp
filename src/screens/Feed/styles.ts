import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const ContainerScroll = styled.ScrollView`
  width: 100%;
  flex: 1;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const ImageContainer = styled.View``;

export const Image = styled.Image`
  width: ${RFValue(42)}px;
  height: ${RFValue(42)}px;

  border-radius: ${RFValue(12)}px;
`;

export const FeedTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-left: 10px;
`;
