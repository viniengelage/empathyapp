import { Ionicons } from '@expo/vector-icons';
import { IconTitle } from 'components/IconTitle';
import React, { useEffect, useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import { api } from 'services/api';

import { Button } from '../../components/Buttons/Default';
import {
  ButtonArea,
  ButtonClose,
  ButtonImage,
  Card,
  CenteredView,
  CloseImage,
  Container,
  LineText,
  ModalView,
  Paragraph,
  Picture,
  TextArea,
  TextButton,
  TextCard,
  TextModal,
} from './styles';

interface cardProps {
  title: string;
  text: string;
}
export const ChallengesAccomplished = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState<cardProps>();

  useEffect(() => {
    async function getChallenge() {
      const response = await api.get('/challenges/users/me');
      setChallenges(response.data);
      console.log(response.data);
    }

    getChallenge();
  }, []);
  useEffect(() => {
    console.log(challenges);
  }, []);
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Container>
        <IconTitle title="Desafios Realizados" icon="rocket-outline" />

        {challenges.map(challenge => (
          <Card
            key={challenge.id}
            onPress={() => {
              setSelectedChallenge(challenge);
              setModalVisible(true);
            }}
          >
            <TextArea>
              <LineText />
              <TextCard>{challenge.title}</TextCard>
            </TextArea>
            <ButtonArea>
              <TextButton>Ver desafio</TextButton>
              <ButtonImage name="arrow-redo-outline" />
            </ButtonArea>
          </Card>
        ))}

        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <CenteredView>
              <ModalView>
                <ButtonClose onPress={() => setModalVisible(!modalVisible)}>
                  <CloseImage name="close-outline" />
                </ButtonClose>

                <TextArea>
                  <LineText />
                  <TextCard>{selectedChallenge?.title}</TextCard>
                </TextArea>
                <TextModal>{selectedChallenge?.text}</TextModal>

                <Button
                  title="Completar desafio"
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </ModalView>
            </CenteredView>
          </ScrollView>
        </Modal>
      </Container>
    </ScrollView>
  );
};
