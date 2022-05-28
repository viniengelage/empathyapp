import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ImageContainer = styled.TouchableOpacity``;
export const Image = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;

  border-radius: ${RFValue(50)}px;
  margin-top: ${RFValue(48)}px;

  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 4px;
`;

export const ProfileName = styled.Text`
  margin-top: ${RFValue(32)}px;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secundary};
`;

export const LogoutButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;

  margin-bottom: ${RFValue(24)}px;
`;

export const LogoutButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.input_text};
`;

export const ModalContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
