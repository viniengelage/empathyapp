import React, { useState, useEffect } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { api } from 'services/api';
import { Container } from 'styles/global';
import {
  PostTitle,
  ImageContainer,
  PostImage,
  TitleContainer,
  TitlePost,
  DescriptionPost,
  ButtonMoreDetails,
} from './styles';

type LoginScreenProp = StackNavigationProp<any, 'Notice'>;

interface IParamsProps {
  id: string;
}

interface Post {
  title: string;
  description: string;
  content: string;
  thumbnail_url: string;
}

export function Post({ route }: StackScreenProps<ParamListBase, 'Post'>) {
  const { id } = route.params as IParamsProps;
  const { navigate } = useNavigation<LoginScreenProp>();

  const [post, setPost] = useState<Post>();

  useEffect(() => {
    async function getPost() {
      const response = await api.get(`posts/${id}`);
      setPost(response.data);
    }
    getPost();
  }, [id]);

  return (
    <Container>
      <PostTitle>{post?.title}</PostTitle>
      <ImageContainer>
        {post?.thumbnail_url ? (
          <PostImage source={{ uri: post.thumbnail_url }} />
        ) : null}
      </ImageContainer>
      <TitleContainer>
        <TitlePost>{post?.description}</TitlePost>
      </TitleContainer>
      <DescriptionPost>{post?.content}</DescriptionPost>
      <ButtonMoreDetails onPress={() => navigate('Feed')}>
        Saiba mais
      </ButtonMoreDetails>
    </Container>
  );
}
