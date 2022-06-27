import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const PostTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 132px;
  background-color: #000;
  margin-top: 20px;
  border-radius: 12px;
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const TitleContainer = styled.View`
    width: 100%
    margin: 40px 0;
    border-left-color: ${({ theme }) => theme.colors.primary};
    border-left-width: 4px;
    padding: 5px;
    padding-left: 10px;
`;

export const TitlePost = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const DescriptionPost = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.secundary};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ButtonMoreDetails = styled.Text`
  position: absolute;
  bottom: 20px;
  color: #996da8;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(Ionicons)`
  position: absolute;
  top: ${RFValue(40)}px;
  left: 20px;
  font-size: ${RFValue(24)}px;
  color: #9e9e9e;
`;
