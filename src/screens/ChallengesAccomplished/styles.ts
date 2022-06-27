import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  padding: 8px;
`;

export const Picture = styled.Image`
  width: 64px;
  height: 64px;
  margin-top: 32px;
`;

export const Paragraph = styled.Text`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  margin-top: 16px;
  margin-bottom: 40px;
`;

export const TextCard = styled.Text`
  width: 230px;
  color: ${({ theme }) => theme.colors.secundary};
  font-size: 18px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: left;
`;

export const TextArea = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LineText = styled.View`
  height: 80px;
  width: 4px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-right: 8px;
`;

export const Card = styled.Pressable`
  display: flex;
  flex-direction: column;
  min-height: 150px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  margin-bottom: 16px;
  padding: 20px;
`;

export const ButtonArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ButtonImage = styled(Ionicons)`
  font-size: 18px;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.button};
`;

// styles Modal

export const CenteredView = styled.View`
  flex: 1;
  /*   height: 80vh; */
`;

export const ModalContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const ModalView = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 35px;
`;

export const ButtonClose = styled.Pressable`
  position: absolute;
  right: 32px;
  top: 32px;
`;

export const CloseImage = styled(Ionicons)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.button};
`;

export const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;

export const TextModal = styled.Text`
  text-align: left;
  margin-top: 30px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secundary};
`;
