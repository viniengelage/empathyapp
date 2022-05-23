import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Container, Icon, IconContainer, Title } from './styles';

interface IProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
}

export function IconTitle({ title, icon }: IProps) {
  return (
    <Container>
      <IconContainer>
        <Icon name={icon} />
      </IconContainer>

      <Title>{title}</Title>
    </Container>
  );
}
