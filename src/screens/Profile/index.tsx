import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';

import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

import { Container } from 'styles/global';
import { ChevronButton } from 'components/Buttons/Chevron';

import { Buffer } from 'buffer';

import profileImage from 'assets/profile-image.png';
import { StatusBar } from 'react-native';
import { api } from 'services/api';

import fs from 'fs/promises';

import emptyImage from 'assets/empty-profile-image.png';

import axios from 'axios';
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

  const [userAvatar, setUserAvatar] = useState<string>('');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 3],
      // base64: true,
    });

    if (!result.cancelled && result.uri) {
      const byteCharacters = Buffer.from(result.uri, 'base64').toString();

      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const ext = result.uri.substring(result.uri.lastIndexOf('.') + 1);

      const fileName = result.uri.replace(/^.*[\\/]/, '');
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {
        type: `image/${ext}`,
        filename: fileName,
      });
      // const fileInfo = await FileSystem.getInfoAsync(result.uri);

      const formData = new FormData();

      formData.append('avatar', blob);

      console.log(formData);

      // formData.append('avatar', blob);

      try {
        const response = await api.patch('/users/me/avatar', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log(response.data);
      } catch (error) {
        // console.log(error.response, 'morre expo');
      }
    }
  };

  const handleImage = async () => {
    const response = await api.get('users/me/avatar', {
      responseType: 'arraybuffer',
    });

    const image = Buffer.from(response.data, 'binary').toString('base64');

    setUserAvatar(`data:${response.headers['content-type']};base64,${image}`);
  };

  useEffect(() => {
    if (user) {
      handleImage();
    }
  }, [user]);

  return (
    <>
      <Container>
        <ImageContainer onPress={pickImage}>
          {userAvatar ? (
            <Image source={{ uri: userAvatar }} />
          ) : (
            <Image source={emptyImage} />
          )}
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