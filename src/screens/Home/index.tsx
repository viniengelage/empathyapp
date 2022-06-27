import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';

import { Container } from 'global/styles/global';
import { useAuth } from 'hooks/auth';
import { api } from 'services/api';

import { generateBoxShadowStyle } from 'utils/generateBoxShadow';
import { Header } from 'components/Header';
import roadImage from 'assets/road.png';
import { IUserChallengeProps } from 'types/challenge';
import { ChallengeCard } from 'components/Challenge';
import { ChallengeModal } from 'components/Modals/Challenge';
import {
  DividerLine,
  EmptyImage,
  EmptySection,
  EmptyText,
  ModalContainer,
  Points,
  RoadImage,
  Section,
  SectionDivider,
  SectionTitle,
} from './styles';

export function Home() {
  const { colors } = useTheme();
  const { user, getUser } = useAuth();

  const [userChallenge, setUserChallenge] = useState<IUserChallengeProps>(
    {} as IUserChallengeProps,
  );
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetChallenges = useCallback(async () => {
    const { data } = await api.get('/challenges/users/me');

    const userChallenges = data as unknown as IUserChallengeProps[];

    const incompledChallenge = userChallenges.find(ch => !ch.is_completed);

    if (incompledChallenge) {
      setUserChallenge(incompledChallenge);
    } else {
      setUserChallenge({} as IUserChallengeProps);
    }
  }, []);

  const handleCompleteChallenge = useCallback(
    async id => {
      setLoading(true);
      // return console.log(id, userChallenge.id);
      try {
        await api.patch(`/challenges/${id}/finalize`, {});

        await handleGetChallenges();
        await getUser();

        setLoading(false);

        setVisibleModal(false);
      } catch (error) {
        setLoading(false);
        console.log('Deu erro', error);
      }
    },
    [handleGetChallenges, getUser],
  );

  useEffect(() => {
    handleGetChallenges();
  }, [handleGetChallenges]);

  return (
    <Container>
      <Header />

      <Section
        style={generateBoxShadowStyle({
          xOffset: -2,
          yOffset: 4,
          shadowColorIos: '#171717',
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 4,
          shadowColorAndroid: '#171717',
        })}
      >
        <Points>
          Você possui
          <Points style={{ color: colors.button }}> {user.points} </Points>
          flores em seu caminho
        </Points>

        <RoadImage source={roadImage} />
      </Section>

      <SectionDivider>
        <SectionTitle>Desafio do dia</SectionTitle>
        <DividerLine />
      </SectionDivider>

      {Object.keys(userChallenge).length > 0 ? (
        <ChallengeCard
          style={generateBoxShadowStyle({
            xOffset: -2,
            yOffset: 4,
            shadowColorIos: '#171717',
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 4,
            shadowColorAndroid: '#171717',
          })}
          key={userChallenge.challenge.id}
          title={userChallenge.challenge.title}
          description={userChallenge.challenge.description}
          icon={userChallenge.challenge.icon_url}
          onPress={() => {
            setUserChallenge(userChallenge);
            setVisibleModal(true);
          }}
        />
      ) : (
        <EmptySection>
          <EmptyText>
            Nada por aqui, volte amanhã para se próximo desafio
          </EmptyText>
          <EmptyImage
            source={{
              uri: 'https://res.cloudinary.com/hwjkazwsy/image/upload/v1656352229/assets/Collaboration-pana_umaflg.png',
            }}
          />
        </EmptySection>
      )}

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
          {Object.keys(userChallenge).length > 0 && (
            <ChallengeModal
              title={userChallenge.challenge.title}
              description={userChallenge.challenge.description}
              content={userChallenge.challenge.content}
              icon={userChallenge.challenge.icon_url}
              isComplete={userChallenge.is_completed}
              onClose={() => setVisibleModal(false)}
              onSubmit={() => handleCompleteChallenge(userChallenge.id)}
              loading={loading}
            />
          )}
        </ModalContainer>
      </Modal>
    </Container>
  );
}
