import { Ionicons } from '@expo/vector-icons';
import { ChallengeCard } from 'components/Challenge';
import { IconTitle } from 'components/IconTitle';
import { ChallengeModal } from 'components/Modals/Challenge';
import { Container } from 'global/styles/global';
import React, { useEffect, useState } from 'react';

import { ScrollView, StatusBar } from 'react-native';
import { api } from 'services/api';
import { IChallengeProps, IUserChallengeProps } from 'types/challenge';
import Modal from 'react-native-modal';

import { Button } from '../../components/Buttons/Default';
import {
  ButtonArea,
  ButtonClose,
  ButtonImage,
  Card,
  CenteredView,
  CloseImage,
  LineText,
  ModalContainer,
  ModalView,
  Paragraph,
  Picture,
  TextArea,
  TextButton,
  TextCard,
  TextModal,
} from './styles';

export const ChallengesAccomplished = () => {
  const [challenges, setChallenges] = useState<IUserChallengeProps[]>([]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [selectedUserChallenge, setUserChallenge] =
    useState<IUserChallengeProps>({} as IUserChallengeProps);

  useEffect(() => {
    async function getChallenge() {
      const { data } = await api.get('/challenges/users/me');

      const userChallenges = data as unknown as IUserChallengeProps[];

      setChallenges(userChallenges.filter(ch => ch.is_completed));
    }

    getChallenge();
  }, []);
  return (
    <Container>
      <IconTitle title="Desafios Realizados" icon="rocket-outline" />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ flex: 1 }}
      >
        {challenges.map(userChallenge => {
          const { challenge } = userChallenge;

          return (
            <ChallengeCard
              key={userChallenge.id}
              title={challenge.title}
              description={challenge.description}
              icon={challenge.icon_url}
              onPress={() => {
                setVisibleModal(true);
                setUserChallenge(userChallenge);
              }}
            />
          );
        })}
      </ScrollView>

      <Modal
        isVisible={visibleModal}
        onModalShow={() => setVisibleModal(true)}
        onModalHide={() => setVisibleModal(false)}
        onSwipeComplete={() => setVisibleModal(false)}
        swipeDirection="down"
        onBackButtonPress={() => setVisibleModal(false)}
        style={{
          margin: 0,
        }}
      >
        <StatusBar backgroundColor="rgba(0,0,0,0.7)" barStyle="light-content" />
        <ModalContainer>
          {Object.keys(selectedUserChallenge).length > 0 && (
            <ChallengeModal
              title={selectedUserChallenge.challenge.title}
              description={selectedUserChallenge.challenge.description}
              content={selectedUserChallenge.challenge.content}
              icon={selectedUserChallenge.challenge.icon_url}
              isComplete={selectedUserChallenge.is_completed}
              onClose={() => setVisibleModal(false)}
            />
          )}
        </ModalContainer>
      </Modal>
    </Container>
  );
};
