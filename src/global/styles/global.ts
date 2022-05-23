import styled from 'styled-components/native';

import { Form as Unform } from '@unform/mobile';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;

  padding: ${RFValue(40)}px ${RFValue(20)}px 0;
  background: ${props => props.theme.colors.background};
`;

export const Form = styled(Unform)`
  width: 100%;
  align-items: center;
`;
