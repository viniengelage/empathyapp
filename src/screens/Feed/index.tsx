import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { Container } from 'styles/global';
import { Notice } from 'components/Notice';
import emptyImage from 'assets/empty-profile-image.png';
import { useTheme } from 'styled-components';
import { api } from 'services/api';
import { useAuth } from '../../hooks/auth';
import {
  ContainerScroll,
  Title,
  ImageContainer,
  Image,
  FeedTitle,
} from './styles';

export function Feed() {
  const [posts, setPosts] = useState([]);
  const [userAvatar, setUserAvatar] = useState<string>('');

  const { colors } = useTheme();
  const { user, logout, getUser } = useAuth();

  useEffect(() => {
    async function getPosts() {
      const responsePost = await api.get('posts');

      setPosts(responsePost.data);

      try {
        const response = await api.get('users/me/avatar', {
          responseType: 'arraybuffer',
        });

        const image = Buffer.from(response.data, 'binary').toString('base64');

        setUserAvatar(
          `data:${response.headers['content-type']};base64,${image}`,
        );
      } catch (error) {
        console.log(error, 'erro');
        setUserAvatar('');
      }
    }

    getPosts();
  }, []);

  return (
    <Container style={{ alignItems: 'flex-start' }}>
      <ContainerScroll>
        <Title>
          <ImageContainer>
            {userAvatar ? (
              <Image source={{ uri: userAvatar }} />
            ) : (
              <Image source={emptyImage} />
            )}
          </ImageContainer>
          <FeedTitle>
            Seu Feed,
            <FeedTitle style={{ color: colors.button }}> {user.name}</FeedTitle>
          </FeedTitle>
        </Title>
        {posts?.map(post => (
          <Notice post={post} />
        ))}
      </ContainerScroll>
    </Container>
  );
}
