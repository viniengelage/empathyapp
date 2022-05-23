import React from 'react';
import { Container } from 'styles/global';
import { ChevronButton } from 'components/Buttons/Chevron';
import profileImage from 'assets/profile-image.png';
import {
  Image,
  ImageContainer,
  LogoutButton,
  LogoutButtonText,
  ProfileName,
} from './styles';
import { useAuth } from '../../hooks/auth';

export function Profile() {
  const { user } = useAuth();

  return (
    <Container>
      <ImageContainer>
        {/* <Image source={{ uri: user.avatar_url }} /> */}
        <Image source={profileImage} />
      </ImageContainer>

      <ProfileName>{user.name}</ProfileName>

      <ChevronButton title="Informações pessoais" icon="person-outline" />
      <ChevronButton title="Dados de cadastro" icon="lock-closed-outline" />
      <ChevronButton title="Preferências" icon="options-outline" />
      <ChevronButton title="Desafios realizados" icon="rocket-outline" />
      <LogoutButton>
        <LogoutButtonText>Sair</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
}
