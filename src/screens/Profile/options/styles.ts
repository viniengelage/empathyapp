import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${props => props.theme.colors.background};
  align-items: center;
  justify-content: center;

  padding: 0 16px;

  border-top-left-radius: ${RFValue(16)}px;
  border-top-right-radius: ${RFValue(16)}px;
`;
