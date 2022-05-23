import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Icon, IconContainer, Title } from './styles';

interface IProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  style?: StyleProp<ViewStyle>;
}

export function IconTitle({ title, icon, style }: IProps) {
  return (
    <Container style={style}>
      <IconContainer>
        <Icon name={icon} />
      </IconContainer>

      <Title>{title}</Title>
    </Container>
  );
}
