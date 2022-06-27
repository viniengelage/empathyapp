import React from 'react';
import { StyleProp } from 'react-native';
import {
  Button,
  ButtonIcon,
  ButtonText,
  Container,
  Description,
  Divider,
  Footer,
  Header,
  Icon,
  Title,
} from './styles';

interface IProps {
  title: string;
  description: string;
  icon: string;
  style?: StyleProp<any>;
  onPress?(): void;
}

export function ChallengeCard({
  title,
  description,
  icon,
  style,
  onPress,
}: IProps) {
  return (
    <Container style={style}>
      <Header>
        <Divider />
        <Title>{title}</Title>
      </Header>
      <Description>{description}</Description>
      <Footer>
        <Icon source={{ uri: icon }} />
        <Button onPress={() => onPress && onPress()}>
          <ButtonText>Mais informações</ButtonText>
          <ButtonIcon name="arrow-forward-outline" />
        </Button>
      </Footer>
    </Container>
  );
}
