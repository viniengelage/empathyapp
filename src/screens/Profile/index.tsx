import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { Buffer } from 'buffer';
import { StatusBar } from 'react-native';

import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

import { Container } from 'global/styles/global';
import { ChevronButton } from 'components/Buttons/Chevron';

import { api } from 'services/api';
import emptyImage from 'assets/empty-profile-image.png';

import { FileSystemUploadType } from 'expo-file-system';
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
  const { user, logout, getUser } = useAuth();

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const [userAvatar, setUserAvatar] = useState<string>('');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 3],
    });

    if (!result.cancelled && result.uri) {
      const { uri } = result;

      try {
        await FileSystem.uploadAsync(
          `${api.defaults.baseURL}/users/me/avatar`,
          uri,
          {
            headers: {
              Authorization: api.defaults.headers.common
                .Authorization as string,
            },
            uploadType: FileSystemUploadType.MULTIPART,
            fieldName: 'avatar',
            httpMethod: 'PATCH',
          },
        );

        await getUser();
      } catch (error) {
        console.log(error);
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
