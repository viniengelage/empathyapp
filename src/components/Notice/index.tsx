import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { Text } from 'react-native';
import {
  Container,
  NoticeTitle,
  NoticeMessage,
  ImageContainer,
  Image,
  MoreInformation,
  TouchableOpacity,
} from './styles';

type LoginScreenProp = StackNavigationProp<any, 'Notice'>;

interface IProps {
  post: {
    id: string;
    title: string;
    description: string;
    thumbnail_url: string;
  };
}

export function Notice({ post }: IProps) {
  const { navigate } = useNavigation<LoginScreenProp>();
  const { colors, fonts } = useTheme();

  const { title, description, thumbnail_url } = post;

  return (
    <Container>
      <ImageContainer>
        {thumbnail_url ? <Image source={{ uri: thumbnail_url }} /> : null}
      </ImageContainer>
      <NoticeTitle>{title}</NoticeTitle>
      <NoticeMessage>{description}</NoticeMessage>

      <MoreInformation>
        <TouchableOpacity onPress={() => navigate('Post', { id: post.id })}>
          <Text style={{ fontFamily: fonts.light }}>Ir para o desafio</Text>
          <Ionicons
            name="arrow-redo-outline"
            size={18}
            color={colors.primary}
          />
        </TouchableOpacity>
      </MoreInformation>
    </Container>
  );
}
