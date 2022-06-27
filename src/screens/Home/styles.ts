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

export const SectionDivider = styled.View`
  margin-top: ${RFValue(16)}px;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;

export const DividerLine = styled.View`
  width: ${RFValue(50)}px;
  height: 5px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
`;

export const ModalContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const EmptySection = styled.View``;
export const EmptyText = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.secundary};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  text-align: center;
  margin-top: ${RFValue(16)}px;
`;
export const EmptyImage = styled.Image`
  width: ${RFValue(300)}px;
  height: ${RFValue(260)}px;
  margin-top: ${RFValue(-16)}px;
`;
