import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { Buffer } from 'buffer';
import { Platform, StatusBar } from 'react-native';

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
import { ChangePreferences } from './options/ChangePreferences';
import { ChangePassword } from './options/ChangePassword';
import { RegistrationData } from './options/RegistrationData';
import { ChangeSchedule } from './options/ChangeSchedule';

type ModalType =
  | 'personal'
  | 'register'
  | 'preferences'
  | 'challenges'
  | 'password';

export function Profile() {
  const { user, logout, getUser } = useAuth();

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const [userAvatar, setUserAvatar] = useState<string>('');
  const [modalType, setModalType] = useState<ModalType>('personal');

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
  return (
    <>
      <Container>
        <ImageContainer onPress={pickImage}>
          {user && user.avatar_url ? (
            <Image source={{ uri: user.avatar_url }} />
          ) : (
            <Image source={emptyImage} />
          )}
        </ImageContainer>

        <ProfileName>{user.name}</ProfileName>

        <ChevronButton
          title="Informações pessoais"
          icon="person-outline"
          onPress={() => {
            setModalType('personal');
            setModalIsOpen(true);
          }}
        />
        <ChevronButton
          title="Dados de cadastro"
          icon="pencil-outline"
          onPress={() => {
            setModalType('register');
            setModalIsOpen(true);
          }}
        />
        <ChevronButton
          title="Preferências"
          icon="options-outline"
          onPress={() => {
            setModalType('preferences');
            setModalIsOpen(true);
          }}
        />
        <ChevronButton
          title="Desafios realizados"
          icon="rocket-outline"
          onPress={() => {
            setModalType('challenges');
            setModalIsOpen(true);
          }}
        />
        <ChevronButton
          title="Trocar senha"
          icon="lock-closed-outline"
          onPress={() => {
            setModalType('password');
            setModalIsOpen(true);
          }}
        />

        <LogoutButton onPress={logout}>
          <LogoutButtonText>Sair da conta</LogoutButtonText>
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
          {modalType === 'personal' && (
            <PersonalInformations
              onFinish={() => setModalIsOpen(false)}
              close={() => setModalIsOpen(false)}
            />
          )}
          {/* {modalType === 'register' && (
            <ChangePreferences
              onFinish={() => setModalIsOpen(false)}
              close={() => setModalIsOpen(false)}
            />
          )} */}
          {modalType === 'password' && (
            <ChangePassword
              onFinish={() => setModalIsOpen(false)}
              close={() => setModalIsOpen(false)}
            />
          )}
          {modalType === 'register' && (
            <RegistrationData
              onFinish={() => setModalIsOpen(false)}
              close={() => setModalIsOpen(false)}
            />
          )}
          {modalType === 'preferences' && (
            <ChangeSchedule
              onFinish={() => setModalIsOpen(false)}
              close={() => setModalIsOpen(false)}
            />
          )}
        </ModalContainer>
      </Modal>
    </>
  );
}
