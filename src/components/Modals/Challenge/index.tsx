import { Button } from 'components/Buttons/Default';
import { Text, View } from 'react-native';
import {
  CloseContainer,
  CloseIcon,
  Container,
  Content,
  Description,
  Divider,
  Header,
  Icon,
  Title,
  TitleView,
} from './styles';

interface IProps {
  title: string;
  description: string;
  content: string;
  icon: string;
  isComplete?: boolean;
  loading?: boolean;
  onClose(): void;
  onSubmit?(): void;
}

export function ChallengeModal({
  title,
  description,
  content,
  icon,
  isComplete,
  loading = false,
  onClose,
  onSubmit,
}: IProps) {
  return (
    <Container>
      <Header>
        <TitleView>
          <Divider />
          <Title>{title}</Title>
        </TitleView>

        <CloseContainer onPress={() => onClose()}>
          <CloseIcon name="close-outline" />
        </CloseContainer>
      </Header>

      <Description>{description}</Description>

      <Icon
        source={{
          uri: icon,
        }}
      />

      <Content>{content}</Content>

      {onSubmit && !isComplete && (
        <Button
          loading={loading}
          title="Concluir desafio"
          onPress={() => onSubmit && onSubmit()}
        />
      )}
    </Container>
  );
}
