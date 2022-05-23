import React, { useState } from 'react';
import Modal from 'react-native-modal';

import { Container } from 'styles/global';
import { ChevronButton } from 'components/Buttons/Chevron';

import profileImage from 'assets/profile-image.png';
import { StatusBar } from 'react-native';
import {
  Image,
  ImageContainer,
  LogoutButton,
  LogoutButtonText,
  ModalContainer,
  ProfileName,
} from './styles';

import { useAuth } from '../../hooks/auth';
import { PersonalInformations } from './options/PersonalInformations';

export function Profile() {
  const { user, logout } = useAuth();

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <>
      <Container>
        <ImageContainer>
          {/* <Image source={{ uri: user.avatar_url }} /> */}
          <Image source={profileImage} />
        </ImageContainer>

        <ProfileName>{user.name}</ProfileName>

        <ChevronButton
          title="Informações pessoais"
          icon="person-outline"
          onPress={() => setModalIsOpen(true)}
        />
        <ChevronButton title="Dados de cadastro" icon="lock-closed-outline" />
        <ChevronButton title="Preferências" icon="options-outline" />
        <ChevronButton title="Desafios realizados" icon="rocket-outline" />

        <LogoutButton onPress={logout}>
          <LogoutButtonText>Sair</LogoutButtonText>
        </LogoutButton>
      </Container>

      <Modal
        isVisible={modalIsOpen}
        onSwipeComplete={() => setModalIsOpen(false)}
        swipeDirection="down"
        onBackButtonPress={() => setModalIsOpen(false)}
        style={{
          margin: 0,
        }}
      >
        <StatusBar backgroundColor="rgba(0,0,0,0.7)" barStyle="light-content" />
        <ModalContainer>
          <PersonalInformations onFinish={() => setModalIsOpen(false)} />
        </ModalContainer>
      </Modal>
    </>
  );
}
