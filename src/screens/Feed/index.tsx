import React, { useState, useEffect } from 'react';
import { Container } from 'global/styles/global';
import { Notice } from 'components/Notice';
import { api } from 'services/api';
import { Header } from 'components/Header';
import { ContainerScroll } from './styles';

export function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const { data } = await api.get('/posts');

      setPosts(data);
    }

    getPosts();
  }, []);

  return (
    <Container style={{ alignItems: 'flex-start' }}>
      <ContainerScroll>
        <Header />
        {posts?.map((post, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Notice post={post} key={index} />
        ))}
      </ContainerScroll>
    </Container>
  );
}
